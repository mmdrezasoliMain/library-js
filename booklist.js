let title = document.querySelector('#title')
let author = document.querySelector('#author')
let year = document.querySelector('#year')
let btn  = document.querySelector('.btn')
let table = document.querySelector('.table')
let booksarray = []

function addbook(){
    if( title.value === '' || author.value === ''|| year.value === '' ){
        alert('pls fill our info')
        return
    }
    let titleValue = title.value
    let authorValue = author.value
    let yearValue = year.value
    let bookobj = {
        id : booksarray.length + 1,
        title : titleValue , author : authorValue , year : yearValue
    }
    booksarray.push(bookobj)
    setlocalbook(booksarray)
    genratebook(booksarray)
}

function setlocalbook(bookaray) {
    localStorage.setItem('info',JSON.stringify(bookaray))
}

function genratebook(bookaray){
    let newTb , newTr , newTh1 , newTh2 , newTh3 ;
     table.innerHTML = ''
    bookaray.forEach(function(book){
 newTb = document.createElement('tbody')
    newTr = document.createElement('tr')
    newTh1 = document.createElement('th')
    newTh2 = document.createElement('th')
    newTh3 = document.createElement('th')
     newTh1.innerHTML = book.title
     newTh2.innerHTML = book.author
     newTh3.innerHTML = book.year
     newTb.setAttribute('id','book-list')
     newTb.setAttribute('onclick','deletebook(' + book.id + ')')
    newTr.append(newTh1,newTh2,newTh3)
    newTb.append(newTr)
    table.append(newTb)
    title.value = ''
    author.value = ''
    year.value = ''
     newTr.addEventListener("mouseenter", function(event){
            event.target.style.cursor = "pointer";
        
        });
    }) 
   


}


function getlocal(){
    let localbook = JSON.parse(localStorage.getItem('info'))
    if (localbook){
        booksarray = localbook
    } else {
        booksarray=[]
    }

    genratebook(booksarray)
}


function deletebook(bookaray){
    let mylists = localStorage.getItem('info')
    mylists = booksarray
    let indexac = booksarray.findIndex(function(book){
        return book.id === bookaray
        
    })
    console.log(indexac)
     booksarray.splice(indexac,1)
     setlocalbook(booksarray)
     genratebook(booksarray)
}







window.addEventListener('load',getlocal)
btn.addEventListener('click',addbook)
btn.addEventListener('click',function(event){
    event.preventDefault()
})
