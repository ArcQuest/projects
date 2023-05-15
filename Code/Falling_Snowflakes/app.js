// app.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        shape: {
            type: "image",
            image: {
                src: "snowflake.png",
                width: 100,
                height: 100
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    }
});
