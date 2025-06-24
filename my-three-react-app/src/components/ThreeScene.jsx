import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ThreeScene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const currentMount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    currentMount.appendChild(renderer.domElement)

    // Add cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Add light
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5).normalize()
    scene.add(light)

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement)

    camera.position.z = 5
    controls.update()

    // Raycaster
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const onMouseClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(scene.children)

      intersects.forEach((intersect) => {
        if (intersect.object === cube) {
          cube.material.color.set(Math.random() * 0xffffff) // ganti warna
        }
      })
    }

    currentMount.addEventListener('click', onMouseClick)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      currentMount.removeEventListener('click', onMouseClick)
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}

export default ThreeScene
