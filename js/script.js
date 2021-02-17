var app = new Vue({
 el: '#app',
 data:{
   array:['Home','Apple','Microsoft','Andriod','Forums','Contact us'],
  duec:'Donec finibus sit amet orci eget ultriciles,Praesent posure ante ut erat frignilla,vestibulum placerat metus mattis.Aenaean dicturm vitae nisl',
  lateR:[
    'Name a dolor volutpat massa auctor semper',
    'Sed euismond nunc urna fermaentum arcu dapibus fringila',
    'Cras latinia tellus id mauris finibus larcus molestie',
    'Curabitur a scelereisque ligula'
  ],
  fr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt pidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  date:'October 11th, 2015 | 2 Comments',
  src:['images/post_feat_img_23-177x142.jpg',
  'images/post_feat_img_22-177x142.jpg',
  'images/post_feat_img_20-177x142.jpg']

 },
 methods:{
   clickme(){
     let player = prompt('welcome Stranger! this site was build with html,css,js & vue.js, Do you wanna check it out? ');
     if (player == 'yes'){
       alert('kindly scroll through the site to visualise it better');
       let r = prompt('i hope you have a nice time');
       if('yes'){
         alert('goodbye!')
       }
     }else if (player == 'no') {
       alert('sorry we couldnt arrive your taste, Goodbye!!');
     }



   }
 }






});
