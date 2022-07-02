Vue.component('mycoponent1',{
    template: '<span id="header">Food Blog</span>'
})
var vm1 = new Vue({
    el: '#header'
})

Vue.component('mycoponent2',{
    template: '<h2>Comments</h2>'
})
var vm1 = new Vue({
    el: '#main',
    data:{
        aside_img: 'images/chili.jpg',
        post1:{
            image : 'images/profile.png',
            author: 'Brianna',
            date: 'February 18, 2021 @ 3:30 pm',
            foodie_evel: 'Novice',
            bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
            desc: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
        },
        post2:{
            image : 'images/profile.png',
            author: 'LINH',
            date: 'February 15, 2021 @ 9:46 am',
            foodie_evel: 'Newcomer',
            bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
            desc: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!'
        },
        post3:{
            image : 'images/profile.png',
            author: 'CATHERINE LEONARDO',
            date: 'February 13, 2021 @ 12:58 pm',
            foodie_evel: 'Mentor',
            bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
            desc: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
        },
        post4:{
            image : 'images/profile.png',
            author: 'KALI',
            date: 'February 13, 2021 @ 11:31 am',
            foodie_evel: 'Novice',
            bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
            desc: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
        },
        modal:{
            author: '',
            foodie_evel: '',
            bio: ''
        }
    },
    methods:{
        displayInfo: function(e, i){
            posts = [this.post1, this.post2, this.post3, this.post4];
            post = posts[i];
            this.modal.author = post.author;
            this.modal.foodie_evel = post.foodie_evel;
            this.modal.bio = post.bio;
            $('#myModal').modal('show');
        }
    }
})