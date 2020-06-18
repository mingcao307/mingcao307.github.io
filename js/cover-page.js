particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 102,
                "density": {
                    "enable": false,
                    "value_area": 0
                }
            },
            "color": {
                "value": "#ba5ffd"
            },
            "shape": {
                "type": "edge",
                "stroke": {
                    "width": 0,
                    "color": "#ba5ffd"
                },
                "polygon": {
                    "nb_sides": 12
                },
                "image": {
                    "src": "",
                    "width": 120,
                    "height": 110
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 20,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 20,
                    "size_min": 2,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 102,
                "color": "#23d7b2",
                "opacity": 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 306,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

);