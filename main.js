gsap.registerPlugin(ScrollTrigger)



////////////오른쪽 헤더 호버 효과/////////////////
const div_wraps = document.querySelectorAll('.wrap');
document.getElementById('very').addEventListener('mousemove', function (e) {
    const x = e.offsetX;
    const y = e.layerY;

    div_wraps.forEach(function (div) {
        div.style.transform = `translate(${x-110}px, ${y+70}px)`;
    });
});

const list = document.querySelectorAll('.list');
// forEach의 arrow function
list.forEach(li_img => {
    li_img.addEventListener('mouseover', function () {
        li_img.querySelector('.wrap').style.visibility = 'visible';
    });
    li_img.addEventListener('mouseleave', function () {
        li_img.querySelector('.wrap').style.visibility = 'hidden';
    });
});

//preroad
let container = document.querySelector('#progress')
let progressText = document.querySelector('.progress-text')
let imgLoaded = 0;
let imgTotal = 500;
let current = 0;
let progressTimer;
let topValue;

// //매시간마다
// // setInterval(할일,시간)
// // setInterval(function(){},1000) //매 1초마다마다 할 일

// //setInterval를 멈추고 싶을때
// // 1)변수에 setInterval 할당한다 let 변수
// // 2)clearInterval(변수)
// // 로딩

progressTimer = setInterval(updateProgress, 1000 / 60)

function updateProgress() {
    imgLoaded++;
    //console.log(imgLoaded)
    let target = (imgLoaded / imgTotal) * 100;
    console.log(target)
    current += (target - current) * 0.01;
    current = current + (target - current) * 0.01;
    progressText.innerHTML = Math.ceil(current) + "%";
    console.log(current)
    if (current > 99) {
        clearInterval(progressTimer)
        container.classList.add('progress-complete')
        gsap.to(container, {
            duration: 0.5,
            yPercent: -400,
            ease: "none",
        })
    }

}


/////////////로딩 화면 로고 움직이기/////////////
function loading() {
    let logo = document.querySelector(".visual")
    let overlay = document.querySelector(".overlay")
    logo.addEventListener("mousemove", function (e) {
        let x = e.offsetX
        let y = e.offsetY
        console.log(x, y)
        let rotateY = -1 / 15 * x + 20
        let rotateX = 5 / 100 * y - 20
        overlay.style = `background-position : ${x/15 + y/15}%`
        logo.style = `transform : perspective(500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    })
}
loading();

////////////////lenisjs/////////////////////

let smoothScrolling = function () {
    const lenis = new Lenis({})

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
smoothScrolling()



import {
    Application
} from 'https://unpkg.com/@splinetool/runtime';

function modeling() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/Cpnrdc-S0UdKDFst/scene.splinecode')
        .then(() => {
            let car = app.findObjectByName('Nissan GTR')
            console.log(car)
            gsap.set(car.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5
            })

            gsap.set(car.position, {
                x: -20,
                y: 0,
                z: 0
            })

            let stopRotation = gsap.to(car.rotation, {
                y: Math.PI * 2 + car.rotation.y,
                duration: 10,
                repeat: -1,
                ease: "none"
            })
            let tl = gsap.timeline;
            tl({
                    scrollTrigger: {
                        trigger: ".second",
                        start: "top bottom",
                        end: "top top",
                        scrub: 1,
                        onEnter: () => {
                            stopRotation.pause(); // 애니메이션 멈춤
                        },
                        onLeaveBack: () => {
                            let newProgress = Math.PI * 2 + car.rotation.y
                            stopRotation.progress(newProgress).resume();
                        }
                    }
                })
                .to(car.rotation, {
                    x: 0,
                    y: Math.PI * 1.3,
                    z: 0
                })
                .to(car.position, {
                    x: -300,
                    y: 0
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                });
            tl({
                    scrollTrigger: {
                        trigger: ".second-5",
                        start: "top bottom",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0,
                    y: Math.PI * 1.3,
                    z: 0
                })
                .to(car.position, {
                    x: -300,
                    y: 0
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                });
            tl({
                    scrollTrigger: {
                        trigger: ".third",
                        start: "top 100%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0,
                    y: Math.PI * 0.5,
                    z: 0
                })
                .to(car.position, {
                    x: 10,
                    y: 30,
                    z: 0
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                })
            tl({
                    scrollTrigger: {
                        trigger: ".third-5",
                        start: "top 100%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0,
                    y: Math.PI * 0.5,
                    z: 0
                })
                .to(car.position, {
                    x: 10,
                    y: 30,
                    z: 0
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                })
            tl({
                    scrollTrigger: {
                        trigger: ".third-6",
                        start: "top 100%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0.78,
                    y: Math.PI * 0.2,
                    z: 0
                })
                .to(car.position, {
                    x: -100,
                    y: 40,
                    z: 0
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                })
            tl({
                    scrollTrigger: {
                        trigger: ".third-7",
                        start: "top 100%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0.78,
                    y: Math.PI * 1.9,
                    z: 0
                })
                .to(car.position, {
                    x: 100,
                    y: 40,
                    z: 0
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                })

            tl({
                    scrollTrigger: {
                        trigger: ".four",
                        start: "top 50%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: Math.PI * 2.1,
                    y: Math.PI * -0.2,
                    z: 0
                })
                .to(car.position, {
                    x: 230,
                    y: 40,
                    z: 20
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                })
            tl({
                    scrollTrigger: {
                        trigger: ".four-5",
                        start: "top 50%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: Math.PI * 2.1,
                    y: Math.PI * -0.2,
                    z: 0
                })
                .to(car.position, {
                    x: 200,
                    y: 60,
                    z: 20
                })
                .to(car.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5
                })
            tl({
                    scrollTrigger: {
                        trigger: ".five",
                        start: "top 100%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0,
                    y: Math.PI * 1.3,
                    z: 0
                })
                .to(car.position, {
                    x: -330,
                    y: 10,
                    z: 0
                })
                .to(car.scale, {
                    x: 1.2,
                    y: 1.2,
                    z: 1.2
                })
            tl({
                    scrollTrigger: {
                        trigger: ".five-5",
                        start: "top 100%",
                        end: "top top",
                        scrub: 1,
                    }
                })
                .to(car.rotation, {
                    x: 0,
                    y: Math.PI * 2.2,
                    z: 0
                })
                .to(car.position, {
                    x: 60,
                    y: 50,
                    z: 1000
                })
                .to(car.scale, {
                    x: 1.2,
                    y: 1.2,
                    z: 1.2
                })
        })

    gsap.timeline()
        .to(".txt", {
            scrollTrigger: {
                trigger: ".txt",
                start: "top 80%",
                end: "bottom center",
                toggleClass: "reset",
                scrub: true,
            },
        })

    gsap.timeline()
        .to(".section-four-txt", {
            scrollTrigger: {
                trigger: ".section-four-txt",
                start: "top 80%",
                end: "bottom center",
                toggleClass: "reset",
                scrub: 1,
            }
        })
        .to(".section-four-txt2", {
            scrollTrigger: {
                trigger: ".section-four-txt2",
                start: "top 80%",
                end: "bottom center",
                toggleClass: "reset",
                scrub: true,
            },
        })
        .to(".square", {
            scrollTrigger: {
                trigger: ".square",
                start: "top 70%",
                end: "bottom center",
                toggleClass: "reset",
                scrub: true,
            },
        })
        .to(".square-2", {
            scrollTrigger: {
                trigger: ".square-2",
                start: "top 70%",
                end: "bottom center",
                toggleClass: "reset2",
                scrub: true,
            },
        })

        .to(".square-2-1", {
            scrollTrigger: {
                trigger: ".square-2-1",
                start: "top 70%",
                end: "bottom center",
                toggleClass: "reset3",
                scrub: true,
            },
        })

        .to(".ccphoto", {
            scrollTrigger: {
                trigger: ".ccphoto",
                start: "top 70%",
                end: "bottom center",
                toggleClass: "reset",
                scrub: true,
            },
        })
}
modeling();

///////////////on///////////////////////////
$(window).scroll(function () {
    //$(this) -> $(window)
    let scrollTop = $(this).scrollTop();
    //offset().top : 전체 문서의 top에서 service영역의 top까지의 거리
    let offsets = $('.third').offset().top;
    let offsets2 = $('.four').offset().top;
    if (scrollTop > offsets) {
        $('body').addClass("on")
    } else {
        $('body').removeClass("on")
    }
    if (scrollTop > offsets) {
        $('.list>p').addClass("on")
    } else {
        $('.list>p').removeClass("on")
    }
    if (scrollTop > offsets) {
        $('path').addClass("on")
    } else {
        $('path').removeClass("on")
    }
    if (scrollTop > offsets2) {
        $('.four').addClass("on")
    } else {
        $('.four').removeClass("on")
    }
    if (scrollTop > offsets2) {
        $('.list>p').removeClass("on")
        $('path').removeClass("on")
        $('body').removeClass("on")
    }
});

////////////////4페이지 마우스 오버//////////////
function change() {

    let change = document.getElementById('arrow');

    change.addEventListener("mouseover", function () {
        change.setAttribute("src", "img/방향2-1.svg");
    })

    change.addEventListener("mouseout", function () {
        change.setAttribute("src", "img/방향2.svg");
    })
}
change();