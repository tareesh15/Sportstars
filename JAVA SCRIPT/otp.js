var otp1=Math.floor(Math.random()*9999)
alert(otp1)
function otp(){
    var eotp=document.getElementById('ot').value
    if(otp1==eotp){
        window.location.href="../HTML/about.html"
    }
    else{
        document.getElementById('error').innerHTML="INCORRECT OTP"
    }
}
function resentotp(){
    window.location.href="../HTML/otp.html"
}
