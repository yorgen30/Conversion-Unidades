function numberFunc() {
    var num = document.getElementById('nentero').value;
    num = parseInt(num);
    
    var num1= num.toString(2);
    var  n2=num.toString(16);
    var  n3=num.toString(8);
    
document.getElementById ('mdecimal').innerHTML = num;
    document.getElementById ('mbin').innerHTML = num1;
document.getElementById('mhexa').innerHTML = n2;
document.getElementById('moctal').innerHTML = n3;
    }

    function numberFuncBin() {
    var num = document.getElementById('nbin').value;

    var numd = parseInt(num,2);
    var numhex=numd.toString(16);
    var numoc=numd.toString(8);


document.getElementById ('mbin').innerHTML = num;
    document.getElementById ('mdecimal').innerHTML = numd;
document.getElementById('mhexa').innerHTML = numhex;
document.getElementById('moctal').innerHTML = numoc;
    }


function numberFuncOctal() {
    var octal = document.getElementById('noctal').value;
    var decimal = parseInt(octal,8);
    var bin= decimal.toString(2);
    var hexa=decimal.toString(16);
    
document.getElementById ('mbin').innerHTML = bin;
    document.getElementById ('mhexa').innerHTML = hexa;
document.getElementById('mdecimal').innerHTML = decimal;
document.getElementById('moctal').innerHTML = octal;
    }

    function numberFuncHexa() {
    var hexa = document.getElementById('nentero').value;
    var d1=hexa.toString(16);
    var decimal=parseInt(d1,16);
    var bin= decimal.toString(2);
    var octal=decimal.toString(8);

document.getElementById ('mhexa').innerHTML = hexa;
document.getElementById ('mdecimal').innerHTML = decimal;
document.getElementById('mbin').innerHTML = bin;
document.getElementById('moctal').innerHTML = octal;

    }


