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