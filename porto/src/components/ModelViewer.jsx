import React, {
  forwardRef,
  Suspense,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useScrollContext } from "../ScrollContext";

// ================== AnimatedModel ==================
const AnimatedModel = forwardRef((props, ref) => {
  const gltf = useGLTF("/models/char.glb");
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, scene);

  const videoRef = useRef(document.createElement("video"));
  const animName = animations[0]?.name;

  useEffect(() => {
    if (!actions || !animName) return;

    // === Siapkan video ===
    const video = videoRef.current;
    video.src = "/videos/demo.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;

    const screen = scene.getObjectByName("MY_SCREEN_MY_SCREEN_0");
    if (screen?.material) {
      screen.material.map = texture;
      screen.material.needsUpdate = true;
    }

    const action = actions[animName];
    action?.stop().reset();

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === "w") {
        action?.reset().play();
        video.play();
      } else if (key === "q") {
        action?.stop().reset();
        video.pause();
        video.currentTime = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      video.pause();
      video.currentTime = 0;
    };
  }, [actions, animName, scene]);

  useEffect(() => {
    // === Tambahkan plane hitam vertikal di belakang model ===
    const planeGeometry = new THREE.PlaneGeometry(4, 4);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: "black" });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

    planeMesh.position.set(-0.17, 1.96, -2.6); // posisi di belakang model
    planeMesh.rotation.set(0, 0, 0); // tegak lurus
    planeMesh.receiveShadow = true;

    scene.add(planeMesh);
  }, [scene]);

  useImperativeHandle(ref, () => ({
    scene,
    animations,
    actions,
    video: videoRef.current,
  }));

  return <primitive object={scene} />;
});

// ================== CameraDebugger ==================
function CameraDebugger({ setCameraInfo, modelRef }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const { isSecondSection } = useScrollContext();

  useEffect(() => {
    if (!controlsRef.current) return;

    // Set target kamera saat mount awal
    const targetInit = new THREE.Vector3(-0.21, 1.4, -0.39);
    controlsRef.current.target.copy(targetInit);
    controlsRef.current.update();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toLowerCase();
      if (!controlsRef.current) return;

      const targetE = new THREE.Vector3(-0.21, 1.81, -0.39);
      const posE = new THREE.Vector3(-0.17, 1.96, 0.6);
      const targetR = new THREE.Vector3(-1.57, 1.44, 0.77);
      const posR = new THREE.Vector3(-2.69, 1.67, -0.97);

      if (key === "e") {
        controlsRef.current.target.copy(targetE);
        camera.position.copy(posE);
        controlsRef.current.update();
      } else if (key === "r") {
        controlsRef.current.target.copy(targetR);
        camera.position.copy(posR);
        controlsRef.current.update();
      } else if (key === "t") {
        camera.position.copy(posE);
        controlsRef.current.target.copy(targetE);
        controlsRef.current.update();

        const duration = 1.5;
        const steps = 60 * duration;
        let count = 0;
        const startPos = posE.clone();
        const startTarget = targetE.clone();

        const animate = () => {
          count++;
          const alpha = count / steps;
          camera.position.copy(startPos.clone().lerp(posR, alpha));
          controlsRef.current.target.copy(
            startTarget.clone().lerp(targetR, alpha),
          );
          controlsRef.current.update();
          if (count < steps) requestAnimationFrame(animate);
        };

        animate();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [camera]);

  useEffect(() => {
    const updateLoop = () => {
      const pos = camera.position;
      const target = controlsRef.current?.target;
      if (target) {
        setCameraInfo({
          position: { x: pos.x, y: pos.y, z: pos.z },
          target: { x: target.x, y: target.y, z: target.z },
        });
      }
      requestAnimationFrame(updateLoop);
    };

    updateLoop();
  }, [camera]);

  // Scroll-triggered camera + animation + video control
  useEffect(() => {
    if (!controlsRef.current || !modelRef.current) return;

    const targetE = new THREE.Vector3(-0.2, 1.88, -0.39);
    const posE = new THREE.Vector3(-0.16, 1.89, 0.78);
    const targetR = new THREE.Vector3(-1.57, 1.44, 0.77);
    const posR = new THREE.Vector3(-2.69, 1.67, -0.97);

    const target = isSecondSection ? targetR : targetE;
    const pos = isSecondSection ? posR : posE;

    const actions = modelRef.current.actions;
    const action =
      actions?.["Skeleton|mixamo.com|Layer0"] ??
      actions?.[Object.keys(actions)[0]];
    const video = modelRef.current.video;

    if (action) {
      if (isSecondSection) {
        action.reset().play();
        video?.play();
      } else {
        action.stop().reset();
        video?.pause();
        video.currentTime = 0;
      }
    }

    const duration = 0.5;
    const steps = 60 * duration;
    let count = 0;
    const startPos = camera.position.clone();
    const startTarget = controlsRef.current.target.clone();

    const animate = () => {
      count++;
      const alpha = count / steps;
      camera.position.copy(startPos.clone().lerp(pos, alpha));
      controlsRef.current.target.copy(startTarget.clone().lerp(target, alpha));
      controlsRef.current.update();
      if (count < steps) requestAnimationFrame(animate);
    };

    animate();
  }, [isSecondSection]);

  useEffect(() => {
    const updateInfo = () => {
      if (!controlsRef.current) return;

      setCameraInfo({
        position: {
          x: camera.position.x,
          y: camera.position.y,
          z: camera.position.z,
        },
        target: {
          x: controlsRef.current.target.x,
          y: controlsRef.current.target.y,
          z: controlsRef.current.target.z,
        },
      });
    };

    const id = setInterval(updateInfo, 100); // per 100ms
    return () => clearInterval(id);
  }, [camera, setCameraInfo]);

  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

function SceneLights() {
  const targetRef = useRef();

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.position.set(0, 0, 0); // arah spotlight
    }
  }, []);

  return (
    <>
      <spotLight
        position={[-0.15, 2.05, 1.18]}
        intensity={2}
        angle={0.4}
        penumbra={0.5}
        decay={2}
        distance={10}
        color="white"
        castShadow
        target={targetRef.current}
      />
      <primitive
        object={targetRef.current || new THREE.Object3D()}
        ref={targetRef}
      />
    </>
  );
}

// ================== ModelViewer ==================
export default function ModelViewer({ layout = "center" }) {
  const [cameraInfo, setCameraInfo] = useState({
    position: { x: 0, y: 0, z: 0 },
    target: { x: 0, y: 0, z: 0 },
  });

  const modelRef = useRef();

  const canvasStyle =
    layout === "center"
      ? { position: "absolute", inset: 0 }
      : { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* === Debug panel (hanya di mode development) === */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "rgba(0,0,0,0.7)",
            color: "lime",
            padding: "10px",
            fontSize: "12px",
            zIndex: 4,
          }}
        >
          {/* <div>
            <strong>Camera Info</strong>
          </div>
          <div>
            Pos: x: {cameraInfo.position.x.toFixed(2)} y:{" "}
            {cameraInfo.position.y.toFixed(2)} z:{" "}
            {cameraInfo.position.z.toFixed(2)}
          </div>
          <div>
            Target: x: {cameraInfo.target.x.toFixed(2)} y:{" "}
            {cameraInfo.target.y.toFixed(2)} z: {cameraInfo.target.z.toFixed(2)}
          </div> */}
        </div>
      )}

      <div style={canvasStyle}>
        <Canvas camera={{ position: [-0.17, 1.96, 0.6], fov: 50 }}>
          {/* Cahaya */}
          <ambientLight intensity={2} />
          <pointLight
            position={[0, 0, -1]}
            intensity={700}
            distance={3}
            decay={2}
            color="purple"
            castShadow
          />
          {/* === Lampu Spotlight === */}
          <spotLight
            position={[-0.17, 1.96, 0.6]}
            intensity={2}
            angle={0.4}
            penumbra={0.5}
            decay={2}
            distance={10}
            color="white"
            castShadow
          />
          <primitive
            object={new THREE.Object3D()}
            position={[-0.21, 1.81, -0.39]} // target sorotan spotlight
            attach="target"
          />

          {/* Model dan kontrol kamera */}
          <Suspense fallback={null}>
            <AnimatedModel ref={modelRef} />
            <CameraDebugger setCameraInfo={setCameraInfo} modelRef={modelRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
