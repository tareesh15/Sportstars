
function valid(){
    var db=[{'user':'Hemanthh','pass':'Hemanthh@123'},{'user':'Tareesh','pass':'Tareesh@123'},
        {'user':'Ram','pass':'ramraj@123'},{'user':'sam','pass':'samraj@123'}]
        var username=document.getElementById('user').value
        var password=document.getElementById('pass').value
        flag=false
        for(var i=0;i<db.length;i++)
        {
            if(db[i]['user']==username){
                if(db[i]['pass']==password){
                    flag=true
                }
            }
        }
        if(flag==true){
            window.location.href="./HTML/main.html"
        }
        else{
            alert("Invalid mail id or password")
        }
        
}