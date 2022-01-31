new Vue({
    el: "#app",
    data: {
        title: "Vue Basics",
        cars: ['Toyota', 'Ford', 'Hyundai'], //Array
        robot: {
            name: "Sophia",
            age: 5,
            country: 'Saudi Arabian'
        } , //Object
        greetings: ()=>{
            return "Hi, greetings from Reza";
        },   //function
        profile_img_src: './4760.jpg',
        img_alt: 'No image found',
        myText: 'simple texts with v-text bind',
        myHtml: 'simple bold texts with <b>v-html</b> bind',

        user: "Reza",
        userAge: 24,
        allowedAge: 13,

        formData: {
            firstName: '',
            lastName: '',
        },


    },
    methods: {
        testFunction(){
            return this.robot.name;
        },

        changeUser(){
            setTimeout(()=>{
                this.user = '------';
            },2000)
        },

        changeImage(){
            if(this.profile_img_src == './4760.jpg'){
                this.profile_img_src = './flower.png';
            }else{
                this.profile_img_src = './4760.jpg';
            }
        },

        handleForm(){
            console.log(this.formData);
        }


    }
});