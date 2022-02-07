console.log('heyyy');
const data =[ 
    {
    name : 'rohan das',
    age:18,
    city:'kolkata',
    language:'python',
    framwork:'django',
    image:'https://randomuser.me/api/portraits/med/men/51.jpg'
},

    {
    name : 'humza',
    age:13,
    city:'banglore',
    language:'javascript',
    framwork:'flask',
    image:'https://randomuser.me/api/portraits/med/men/54.jpg'
},

    {
    name : 'muhafiz',
    age:19,
    city:'bhopal',
    language:'c',
    framwork:'django',
    image:'https://randomuser.me/api/portraits/med/men/67.jpg'
},
    {
    name : 'xyz',
    age:79,
    city:'kahi to rehta he',
    language:'c++',
    framwork:'none',
    image:'https://randomuser.me/api/portraits/med/men/69.jpg'
},
    {
    name : 'chocolaty boy',
    age:'cake murder on 15/8/2002 guess my age',
    city:'sapno ka sheher',
    language:'hindi',
    framwork:'ye kya hota he',
    image:'https://randomuser.me/api/portraits/med/men/98.jpg'
},
    {
    name : 'chapri boy',
    age:'landed on earth on 29/4/2000',
    city:'okat ke bahr',
    language:'professional chapri language',
    framwork:'farm =photofram work=chae ki tapri ',
    image:'https://randomuser.me/api/portraits/med/men/28.jpg'
},
    {
    name : 'angel priya',
    age:'first cry on 12/3/2002',
    city:'in your dreams',
    language:'pirofesnol in  inglis',
    framwork:'i dont work',
    image:'https://randomuser.me/api/portraits/med/women/98.jpg'
},
    {
    name : 'dadys princess',
    age:'royal entry on 15/8/2002',
    city:'mumbaiker',
    language:'inglis,gormon,frinch,spensh',
    framwork:'i am bonrn rich',
    image:'https://randomuser.me/api/portraits/med/women/9.jpg'
},
]
function cvitrator(profile) {
    let nextindex=0;
    return{
        next :function () {
            return nextindex<profile.length?
             { value:profile[nextindex++],done:false}:
             {done:true}
        }
    }
}
const candidates=cvitrator(data)
nextcv()
const next = document.getElementById('next');
next.addEventListener('click',nextcv)
function nextcv() {
    const curcan=candidates.next().value
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if (curcan!=undefined){

        image.innerHTML=`<img src ='${curcan.image} '>`
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">NAME :${curcan.name}</li>
        <li class="list-group-item">AGE :${curcan.age}</li>
        <li class="list-group-item">CITY :${curcan.city}</li>
        <li class="list-group-item">LANGUAGE :${curcan.language}</li>
        <li class="list-group-item">FRAMWORK :${curcan.framwork}</li>
        
      </ul>`
    }
    else{
        alert('end of application')
        window.location.reload()
    }
}
