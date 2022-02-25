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
}
    
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
