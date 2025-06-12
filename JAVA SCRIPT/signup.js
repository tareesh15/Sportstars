function signup(){
var phone=document.getElementById('phone_no').value;
var phoneflag=false;
if(phone.length==10 && ((phone[0]>=6) && (phone[0]<=9)))
{
    phoneflag=true;
    console.log('true phone')
}
else{
    phoneflag=false;
    console.log('false phone')
}

//email
var email=document.getElementById('mail').value
var emailflag=false
for(var i=0;i<email.length;i++)
{
    if(email[i]=='@'){
        emailflag=true
        console.log("@ true")
    }
    else if((email[i]>='a') && (email[i]<='z'))
    {
        emailflag=true
        console.log("a true")
    }
    else if(email[i]=='.'){
        emailflag=true
        console.log(". true")
    }
    else{
        emailflag=false
        console.log('false mail')
    }}

//password
    var pass=document.getElementById('pass').value
    var u=0,l=0,n=0,s=0
    var passwordflag=false;
    for(var i=0;i<pass.length;i++)
    {
        if((pass[i]>='A')&&(pass[i]<='Z'))
            {
            u=u+1
        }
        else if((pass[i]>='a')&&(pass[i]<='z'))
            {
                l=l+1
            }
        else if((pass[i]>='0')&&(pass[i]<='9'))
                {
                    n=n+1
                }
        else{
            s=s+1
        }
    }
    if((pass.length>=8)&&(pass.length<=16)&& (u>=1) && (l>=1) && (n>=1) && (s>=1))
    {
        passwordflag=true;
    }
    else{
        passwordflag=false;
        console.log('false pass')
    }

//repass
    var repass=document.getElementById('rpass').value
    var rpassflag=false
    if(pass==repass)
    {
        rpassflag=true
    }
    else{
        rpassflag=false
        console.log('false repass')
    }


if((phoneflag==true) && (passwordflag==true) && (rpassflag==true) && (emailflag==true))
{
    alert('Valid')
    window.location.href="../HTML/otp.html"
}
else{
    alert('Invalid')
    window.location.href="../HTML/signup.html"
}
}
