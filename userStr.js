var clientId= 'bbb77e2a6a799bfc26ed0';
var clientId2= 'M2JViWMjEClGhhM1NN1fl2gXinP9ZxrM';
function userStr(evt)
{
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    // if(evt.key !== undefined && 
    //     evt.key !== 'Backspace' && 
    //     evt.key !== 'Tab')
    // str += evt.key;
    // // getCharacter(userStr);
    // console.log(str, searchBox.value) 
    
}