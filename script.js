// var searchBox = document.querySelector('header input');
// searchBox.addEventListener('keypress', getUserSearch);
//     // console.log(evt.key);

// var userSearch = '';
// // console.log(searchBox);
// function getUserSearch(evt){
//     if(
//         evt.key !== 'undefined'&&
//         evt.key !== 'Backspace'&&
//         evt.key !== 'TAB'
//     )
//     userSearch += evt.key;
//     console.log(userSearch);
//     // userSearch+= userSearch;
//     getCharacter(userSearch);

// }

// function getReq (url, func){
//     var req = new XMLHttpRequest();
//     req.open('GET', url);
//     req.onload = function(){
//         if(req.readyState === 4 && req.status === 200){
//             func(JSON.parse(req.responseText));
//         }else{
//             console.log('error: ', req.statusText);
//         }
//     }
//     req.send(null);
// }

// var cardList = document.querySelector('main ul');

// function cardListData(cards){
//     for(var i =0; i < cards.results.lenght; i++){
//         var card = `
//         <li>
//             <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
//             <h3>${cards.results[i].name}</h3>
//         </li>
//         `;
//         cardList.innerHTML+= card;
//     }
// }
// getReq('https://rickandmortyapi.com/api/character', cardListData);

// function getCharacter(searchStr){
//     getReq('https://rickandmortyapi.com/api/character',);
// }
// function characterData(data){
//     console.log(data);
//     for(var i = 0; i < data.results.lenght; i++){
//         // console.log(data.results[i].name);
//         return data.results[i].name;
//     }
// }
var searchBox = document.querySelector('header input');
searchBox.addEventListener('keypress', getUserSearch);
searchBox.value= '';
var userSearch = '';

function getUserSearch(evt)
{
    if(evt.key !== undefined && evt.key !== 'Backspace' && evt.key !== 'Tab')
    userSearch += evt.key;
    getCharacter(userSearch); 
    
}

function getReq(url, func)
{
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function()
    {
        if(req.readyState === 4 && req.status === 200)
        {
            func(JSON.parse(req.responseText));
            console.log(JSON.parse(req.responseText));
        }
        else 
        {
            console.log('error');
        }
    }
    req.send(null);
}

var cardList = document.querySelector('main ul');

function cardListData(cards)
{
    for(var i = 0; i < cards.results.length; i++)
    {
        var card = `
            <li>
                <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
                <h3>${cards.results[i].name}</h3>
            </li>
        `;
        cardList.innerHTML += card;
    }
}

getReq('https://rickandmortyapi.com/api/character', cardListData);

function getCharacter(searchStr)
{
    
    var characterArr = [];
    // console.log(searchStr);
    var req = new XMLHttpRequest();
    req.open('GET','https://rickandmortyapi.com/api/character');
    
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){

            var obj = JSON.parse(req.responseText).results;

            for(var i = 0; i< obj.length; i++){
                console.log(obj[i].name.includes(searchStr), obj[i].name);
               
                if(obj[i].name.includes(searchStr)){
                    cardList.innerHTML= '';
                    var card = `
                                <li>
                                    <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
                                <h3>${cards.results[i].name}</h3>
                                </li>
                    `;
        cardList.innerHTML += card;
                }
            }
        }
    }

    req.send(null);
    console.log(characterArr);
    
}
// function characterData(data)
// {
//     console.log(data);
//     for(var i = 0; i<data.results.length; i++)
//     {
//         // console.log(data.results[i].name);
//         return data.results[i].name;
//     }
// }