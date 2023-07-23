// Menu toogle code starts here
burger =document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
navItems = document.querySelector('.nav-items');

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
navList.addEventListener('click',()=>{
    navbar.classList(toggle('v-class-resp'))
})

navItems.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

//  Menu toogle code end here

// Gallery code starts here 

function buttons1(e) {

    let id = e.id;
    let circlesBtn = document.querySelectorAll('.circle1 span');
    let images = document.querySelectorAll('.images1 img');
    if (id > 0) {
        app1.$data.leftArrow1 = true;
    }
    else {
        app1.$data.leftArrow1 = false;
    }
    if (id < circlesBtn.length - 1) {
        app1.$data.rightArrow1 = true;
    }
    else {
        app1.$data.rightArrow1 = false;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].className = '';
        circlesBtn[i].className = '';
    }
    images[id].className = 'show';
    e.className = 'btnShow';
}

app1 = new Vue({
    mounted() {

        var images = document.querySelectorAll('.images1 img');
        let circlesBtn;
        for (let i = 0; i < images.length; i++) {
            // adding circle buttons
            if (i === 0) {
                document.querySelector('.circle1').innerHTML += `<span id="${i}" class="btnShow"></span>`;
                images[i].className = 'show';
            }
            else {
                document.querySelector('.circle1').innerHTML += `<span id="${i}"></span>`;
            }

            circlesBtn = document.querySelectorAll('.circle1 span');
            circlesBtn[i].setAttribute('onclick', 'buttons1(this)');
            // adding id for each image
            images[i].setAttribute('id', i);
            // disable draggable of images
            images[i].setAttribute('draggable', 'false');
        }
        this.autoPlay1();

    },
    el: '#app1',
    data1: {
        leftArrow1: false,
        rightArrow1: true,
        mouseDowned1: false,
        mouseDownx1: 0,
        mouseUpped1: false,
        mouseUpX1: 0,
        mouseMoveX1: 0,
        autoPlayed1: true,

    },
    methods: {
        next1: function () {
            let ele = document.querySelector('.show');
            let circlesBtn = document.querySelectorAll('.circle1 span');
            let allEles = document.querySelectorAll('.images1 img');
            let length = allEles.length;
            this.leftArrow1 = true;
            // if current image and circle button is in the last
            if (ele.nextElementSibling !== null) {
                if (ele.nextElementSibling.id == allEles[length - 1].id) {
                    this.rightArrow1 = false;
                }
                circlesBtn[parseInt(ele.id) + 1].className = 'btnShow';
                circlesBtn[parseInt(ele.id)].className = '';
                ele.className = '';
                ele.nextElementSibling.className = 'show';
            }


        },
        previous1: function () {
            let ele = document.querySelector('.show');
            let circlesBtn = document.querySelectorAll('.circle1 span');
            let allEles = document.querySelectorAll('.images1 img');
            let length1 = allEles.length;
            this.rightArrow1 = true;
            // if current image and circle button is in the first
            if (ele.previousElementSibling !== null) {
                if (ele.previousElementSibling.id == allEles[0].id) {
                    this.leftArrow1 = false;
                    circlesBtn[0].className = 'btnShow';
                }
                else {
                    circlesBtn[parseInt(ele.id) - 1].className = 'btnShow';
                }
                circlesBtn[parseInt(ele.id)].className = '';
                ele.className = '';
                ele.previousElementSibling.className = 'show';
            }
        },

        ifTouched1: function (event, touched) {
            // if mobile devices
            if (touched == 'touched') {
                let rect = event.target.getBoundingClientRect();
                let x = event.targetTouches[0].pageX - rect.left;
                return event.offsetX = x;
            }
            else {
                return event.offsetX;
            }
        },
        mouseDown1: function (e, touched) {
            this.mouseDownx1 = this.ifTouched1(e, touched);
            this.mouseDowned1 = true;
        },
        mouseMove1: function (e, touched) {
            let image = document.querySelector('.show');
            image.style.left = 0;
            // mouse down should be fired before mouse move
            if (this.mouseDowned1) {
                image.style.left = `${this.ifTouched1(e, touched) - this.mouseDownx1}px`;
            }
        },
        mouseUp1: function (e) {
            let image = document.querySelector('.show');
            image.style.left = 0;
            this.mouseDowned1 = false;
            this.mouseUpX1 = e.offsetX;
            let sliderWidth1 = document.querySelector('.slider1').clientWidth;
            // if image pulled/dragged from right to left
            if (this.mouseDownx1 > this.mouseUpX1) {
                this.next1();

            }
            // if image pulled/dragged from left to right
            else if (this.mouseDownx1 < this.mouseUpX1) {
                this.previous1();
            }
            // if not pulled/dragged, only clicked
            else {
                // if the click position is in the right side of the slider
                if (this.mouseDownx1 >= sliderWidth / 2) {
                    this.next1();
                }
                // if the click position is in the left side of the slider
                else {
                    this.previous1();
                }
            }
        },
        autoPlay1: function () {
            this.autoPlayed1 = true;
            // for each 5sec
            let interval = setInterval(auto, 5000);
            let image = document.querySelector('.show');
            let allEles = document.querySelectorAll('.images1 img');
            let length = allEles.length;
            let circlesBtn = document.querySelectorAll('.circle1 span');
            function auto() {
                if (app1.$data1.autoPlayed1) {
                    let image = document.querySelector('.show');
                    let circleShow = document.querySelector('.btnShow');
                    // if current image in the last
                    if (image.id == allEles[length - 1].id) {
                        image.className = '';
                        allEles[0].className = 'show';
                        circleShow.className = '';
                        circlesBtn[0].className = 'btnShow';
                        app1.$data1.leftArrow1 = false;
                        app1.$data1.rightArrow1 = true;

                    }
                    else {
                        app1.next1();
                        app1.$data1.leftArrow1 = true;
                    }
                }
                else {
                    clearInterval(interval);
                }
            }
        },
        pause1: function () {
            this.autoPlayed1 = false;
        }
    }
});

