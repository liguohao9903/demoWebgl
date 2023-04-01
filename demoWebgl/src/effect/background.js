import  * as THREE from 'three';


export class Background {
    constructor(scene) {
        this.scene = scene;
        this.url = '../../src/assets/black-bg.png'; // 改变背景颜色

        this.init();
    }

    // 創建天空盒
    init() {
        // 創建一個紋理加載器
        const loader = new THREE.TextureLoader();

        const geometry = new THREE.SphereGeometry(5000, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: loader.load(this.url),
        })

        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.copy({
            x: 0,
            y: 0,
            z: 0,
        })

        this.scene.add(sphere);
    }
}

