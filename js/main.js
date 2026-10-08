(function () {
    'use strict';

    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.main-nav');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function () {
            var isOpen = navigation.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navigation.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navigation.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                navigation.querySelectorAll('.nav-menu.is-open').forEach(function (menu) {
                    menu.classList.remove('is-open');
                    menu.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false');
                });
            });
        });
    }

    var navMenus = document.querySelectorAll('.nav-menu');
    navMenus.forEach(function (menu) {
        var trigger = menu.querySelector('.nav-trigger');
        if (!trigger) return;
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            var shouldOpen = !menu.classList.contains('is-open');
            navMenus.forEach(function (other) {
                other.classList.remove('is-open');
                var otherTrigger = other.querySelector('.nav-trigger');
                if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            });
            menu.classList.toggle('is-open', shouldOpen);
            trigger.setAttribute('aria-expanded', String(shouldOpen));
        });

        var previewImage = menu.querySelector('[data-preview-image], .work-preview img');
        var previewTitle = menu.querySelector('[data-preview-title]');
        var servicePreview = menu.querySelector('.service-preview');
        var previewData = {
            presence: { title: 'A clearer digital first impression.', kicker: 'BUSINESS PRESENCE' },
            content: { title: 'Useful ideas, shared consistently.', kicker: 'CONTENT & DISCOVERY' },
            growth: { title: 'Connected work, one clear direction.', kicker: 'ATTENTION TO ACTION' }
        };
        var servicePreviewData = {
            website: 'A clear, easy-to-use website for your business.',
            brand: 'A look people can recognise, remember and trust.',
            found: 'Help more people find your business online.',
            leads: 'Reach new customers and bring in more enquiries.',
            social: 'Keep your business active and easy to remember.',
            next: 'A clear plan for what to do next.'
        };
        menu.querySelectorAll('[data-preview]').forEach(function (item) {
            function activatePreview() {
                var key = item.getAttribute('data-preview');
                var data = previewData[key];
                var serviceDescription = servicePreviewData[key];
                if (!data && !serviceDescription) return;
                menu.querySelectorAll('[data-preview].is-active').forEach(function (active) { active.classList.remove('is-active'); });
                item.classList.add('is-active');
                var previewKicker = menu.querySelector('[data-preview-kicker]');
                var workPreview = menu.querySelector('.work-menu-preview');
                if (workPreview && data) workPreview.setAttribute('data-preview', key);
                if (previewKicker && data && data.kicker) previewKicker.textContent = data.kicker;
                if (servicePreview && serviceDescription) {
                    servicePreview.setAttribute('data-preview', key);
                    if (previewTitle) previewTitle.textContent = serviceDescription;
                } else if (previewImage && data && data.image) {
                    previewImage.style.opacity = '0';
                    window.setTimeout(function () {
                        previewImage.src = data.image;
                        previewImage.style.opacity = '';
                    }, 120);
                    if (previewTitle) previewTitle.textContent = data.title;
                } else if (previewTitle && data) {
                    previewTitle.textContent = data.title;
                }
            }
            item.addEventListener('mouseenter', activatePreview);
            item.addEventListener('focus', activatePreview);
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.site-header')) {
            navMenus.forEach(function (menu) {
                menu.classList.remove('is-open');
                var trigger = menu.querySelector('.nav-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            navMenus.forEach(function (menu) {
                menu.classList.remove('is-open');
                var trigger = menu.querySelector('.nav-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
            if (navigation && menuToggle) {
                navigation.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    var revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries, currentObserver) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(function (item) { observer.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add('is-visible'); });
    }

    var systemRoot = document.querySelector('[data-growth-system]');
    var hero = document.querySelector('.hero');
    var artworkImage = document.querySelector('.hero-artwork-image');
    var artworkLight = document.querySelector('.hero-artwork-light');
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showSystemFallback() {
        if (systemRoot) systemRoot.classList.add('is-fallback');
    }

    function createGrowthSystem() {
        if (!systemRoot || !window.THREE || !window.WebGLRenderingContext) {
            showSystemFallback();
            return;
        }

        var canvas = systemRoot.querySelector('canvas');
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
        camera.position.set(0, 0, 8.2);
        var renderer;

        try {
            renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
        } catch (error) {
            showSystemFallback();
            return;
        }

        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
        renderer.setClearColor(0x101828, 0);

        var system = new THREE.Group();
        var structure = new THREE.Group();
        var nodeGroup = new THREE.Group();
        var particleGroup = new THREE.Group();
        system.add(structure, nodeGroup, particleGroup);
        scene.add(system);

        var compact = window.innerWidth < 768;
        var nodeCount = compact ? 12 : 20;
        var particleCount = compact ? 12 : 26;
        var nodes = [];
        var nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xf8f8f5, transparent: true, opacity: 0.82 });
        var accentMaterial = new THREE.MeshBasicMaterial({ color: 0xb7ee4b, transparent: true, opacity: 0.95 });
        var linkMaterial = new THREE.LineBasicMaterial({ color: 0xdfe5d5, transparent: true, opacity: 0.25 });
        var limeLinkMaterial = new THREE.LineBasicMaterial({ color: 0xb7ee4b, transparent: true, opacity: 0.38 });

        for (var i = 0; i < nodeCount; i += 1) {
            var angle = (i / nodeCount) * Math.PI * 2;
            var layer = i % 3;
            var radius = layer === 0 ? 2.05 : (layer === 1 ? 1.35 : 0.72);
            var target = new THREE.Vector3(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.72,
                (layer - 1) * 0.72 + Math.sin(angle * 2) * 0.22
            );
            var scatter = target.clone().multiplyScalar(1.45).add(new THREE.Vector3(
                (Math.random() - 0.5) * 1.2,
                (Math.random() - 0.5) * 0.9,
                (Math.random() - 0.5) * 0.8
            ));
            var mesh = new THREE.Mesh(new THREE.SphereGeometry(layer === 2 ? 0.09 : 0.065, 8, 8), layer === 2 && i % 2 === 0 ? accentMaterial : nodeMaterial);
            mesh.position.copy(scatter);
            mesh.userData.target = target;
            mesh.userData.scatter = scatter;
            mesh.userData.baseScale = layer === 2 && i % 2 === 0 ? 1.5 : 1;
            nodeGroup.add(mesh);
            nodes.push(mesh);
        }

        var core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), accentMaterial);
        core.userData.baseScale = 1;
        nodeGroup.add(core);

        var links = [];
        nodes.forEach(function (node, index) {
            var nearest = nodes
                .map(function (other, otherIndex) {
                    return { node: other, index: otherIndex, distance: node.position.distanceTo(other.position) };
                })
                .filter(function (item) { return item.index !== index; })
                .sort(function (a, b) { return a.distance - b.distance; })
                .slice(0, 2);
            nearest.forEach(function (item) {
                if (item.index > index) {
                    var line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([node.position, item.node.position]), index % 4 === 0 ? limeLinkMaterial : linkMaterial);
                    line.userData = { a: node, b: item.node, phase: Math.random() * Math.PI * 2 };
                    structure.add(line);
                    links.push(line);
                }
            });
        });

        [[2.1, 1.35, 0.45], [1.45, 2.1, -0.65]].forEach(function (frame, index) {
            var width = frame[0];
            var height = frame[1];
            var framePoints = [
                new THREE.Vector3(-width, -height, 0),
                new THREE.Vector3(width, -height, 0),
                new THREE.Vector3(width, height, 0),
                new THREE.Vector3(-width, height, 0)
            ];
            var frameLine = new THREE.LineLoop(
                new THREE.BufferGeometry().setFromPoints(framePoints),
                new THREE.LineBasicMaterial({ color: index ? 0xb7ee4b : 0xf8f8f5, transparent: true, opacity: index ? 0.16 : 0.1 })
            );
            frameLine.rotation.set(0.2, frame[2], index ? -0.12 : 0.08);
            structure.add(frameLine);
        });
        var axisLine = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-2.4, -1.3, 0.1), new THREE.Vector3(2.3, 1.45, 0.1)]),
            new THREE.LineBasicMaterial({ color: 0xb7ee4b, transparent: true, opacity: 0.14 })
        );
        structure.add(axisLine);

        var particlePositions = new Float32Array(particleCount * 3);
        for (var p = 0; p < particleCount; p += 1) {
            var pAngle = Math.random() * Math.PI * 2;
            var pRadius = 1.1 + Math.random() * 1.45;
            particlePositions[p * 3] = Math.cos(pAngle) * pRadius;
            particlePositions[p * 3 + 1] = (Math.random() - 0.5) * 2.2;
            particlePositions[p * 3 + 2] = (Math.random() - 0.5) * 1.8;
        }
        var particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGroup.add(new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xb7ee4b, size: 0.035, transparent: true, opacity: 0.5 })));

        var pointer = new THREE.Vector2();
        var smoothPointer = new THREE.Vector2();
        var hover = 0;
        var discovery = 0;
        var start = Date.now();
        var lastFrame = 0;
        var scrollShift = 0;
        var artX = 0;
        var artY = 0;
        var artDepth = 0;
        var artCurrentX = 0;
        var artCurrentY = 0;
        var artCurrentDepth = 0;

        function updateArtwork(event) {
            if (!hero || prefersReducedMotion) return;
            var bounds = hero.getBoundingClientRect();
            var x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
            var y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
            pointer.x = x;
            pointer.y = y;
            hover = 1;
            discovery = Math.min(1, discovery + 0.012);
            systemRoot.classList.add('is-discovered');
            systemRoot.style.setProperty('--system-focus-x', x.toFixed(3));
            systemRoot.style.setProperty('--system-focus-y', y.toFixed(3));
            artX = x * -5;
            artY = y * 3;
            artDepth = Math.abs(x) + Math.abs(y);
            if (artworkImage) {
                artworkImage.style.setProperty('--art-depth', artDepth.toFixed(2));
            }
            if (artworkLight) {
                artworkLight.style.setProperty('--light-x', x.toFixed(3));
                artworkLight.style.setProperty('--light-y', (-y).toFixed(3));
                artworkLight.style.setProperty('--light-opacity', '0.8');
            }
        }

        function resize() {
            var width = systemRoot.clientWidth;
            var height = systemRoot.clientHeight;
            if (!width || !height) return;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
        }

        function setPointer(event) {
            var bounds = canvas.getBoundingClientRect();
            pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
            pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
            hover = 1;
            discovery = Math.min(1, discovery + 0.018);
            systemRoot.classList.add('is-discovered');
            systemRoot.style.setProperty('--system-focus-x', pointer.x.toFixed(3));
            systemRoot.style.setProperty('--system-focus-y', pointer.y.toFixed(3));
        }

        function render(time) {
            if (time - lastFrame < 30) {
                requestAnimationFrame(render);
                return;
            }
            lastFrame = time;
            var elapsed = (Date.now() - start) / 1000;
            var assemble = prefersReducedMotion ? 1 : Math.min(1, elapsed / 2.2);
            var eased = 1 - Math.pow(1 - assemble, 3);
            if (!prefersReducedMotion) discovery = Math.min(1, discovery + (hover * 0.0008));
            if (!prefersReducedMotion && artworkImage) {
                artCurrentX += (artX - artCurrentX) * 0.04;
                artCurrentY += (artY - artCurrentY) * 0.04;
                artCurrentDepth += (artDepth - artCurrentDepth) * 0.04;
                artworkImage.style.setProperty('--art-x', (Math.sin(elapsed * 0.08) * 1.8 + artCurrentX).toFixed(2));
                artworkImage.style.setProperty('--art-y', (Math.cos(elapsed * 0.07) * 1.1 + artCurrentY).toFixed(2));
                artworkImage.style.setProperty('--art-depth', artCurrentDepth.toFixed(2));
            }
            if (!prefersReducedMotion) {
                smoothPointer.x += (pointer.x - smoothPointer.x) * 0.045;
                smoothPointer.y += (pointer.y - smoothPointer.y) * 0.045;
                hover += (pointer.x === 0 && pointer.y === 0 ? -hover : 0) * 0.03;
                system.rotation.y += 0.0018;
                system.rotation.x = Math.sin(elapsed * 0.18) * 0.04;
            }
            system.position.x += ((smoothPointer.x * 0.24) - system.position.x) * 0.035;
            system.position.y += ((smoothPointer.y * 0.16 - scrollShift * 0.9) - system.position.y) * 0.045;
            system.position.z += ((scrollShift * 0.7) - system.position.z) * 0.045;
            system.scale.setScalar(0.94 + eased * 0.06 - scrollShift * 0.08);

            nodes.forEach(function (node, index) {
                var target = node.userData.target;
                var organized = node.userData.scatter.clone().lerp(target, Math.max(eased, discovery));
                var pulse = prefersReducedMotion ? 0 : Math.sin(elapsed * 0.8 + index) * 0.025;
                var settle = prefersReducedMotion ? 1 : 0.045;
                var localDistance = Math.hypot(organized.x - smoothPointer.x * 1.8, organized.y + smoothPointer.y * 1.5);
                var localResponse = Math.max(0, 1 - localDistance / 1.3) * hover;
                var localX = smoothPointer.x * (index % 2 ? 0.04 : -0.04) * localResponse;
                var localY = -smoothPointer.y * 0.035 * localResponse;
                node.position.x += (organized.x + localX - node.position.x) * settle;
                node.position.y += (organized.y + pulse + localY - node.position.y) * settle;
                node.position.z += (organized.z + localResponse * 0.1 - node.position.z) * settle;
                var distanceToPointer = Math.hypot(node.position.x - smoothPointer.x * 1.4, node.position.y + smoothPointer.y * 1.2);
                var focus = Math.max(0, 1 - distanceToPointer / 1.15) * hover;
                node.scale.setScalar(node.userData.baseScale + focus * 0.65);
            });
            core.rotation.y += prefersReducedMotion ? 0 : 0.006;
            links.forEach(function (line) {
                var midpoint = line.userData.a.position.clone().add(line.userData.b.position).multiplyScalar(0.5);
                midpoint.z += Math.sin(elapsed * 0.7 + line.userData.phase) * 0.06;
                line.geometry.setFromPoints([line.userData.a.position, midpoint, line.userData.b.position]);
                line.material.opacity = (line.material === limeLinkMaterial ? 0.24 : 0.08) + discovery * (line.material === limeLinkMaterial ? 0.24 : 0.18) + hover * 0.06;
            });
            renderer.render(scene, camera);
            if (!prefersReducedMotion) requestAnimationFrame(render);
        }

        canvas.addEventListener('pointermove', setPointer);
        canvas.addEventListener('pointerleave', function () { pointer.set(0, 0); });
        if (hero) {
            hero.addEventListener('pointermove', updateArtwork);
            hero.addEventListener('pointerleave', function () {
                pointer.set(0, 0);
                hover = 0;
                artX = 0;
                artY = 0;
                artDepth = 0;
                if (artworkLight) artworkLight.style.setProperty('--light-opacity', '0.35');
            });
        }
        window.addEventListener('resize', resize);
        window.addEventListener('scroll', function () {
            var progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight)));
            scrollShift = progress * 0.55;
            if (artworkImage) artworkImage.style.setProperty('--art-scroll', progress.toFixed(3));
        }, { passive: true });
        resize();
        render(0);
    }

    createGrowthSystem();
}());
