//Astro Lion's Calculator

function getDisplay()
{
	return document.getElementById('display');
}

function getDisplayValue() {
	return getDisplay().value;
}
function setDisplayValue(value)
{
	document.getElementById('display').value=value;
}

function getDisplayIntValue()
{
	return parseInt(getDisplayValue());
}

function addToDisplay (value) {
	if (getDisplayIntValue()==0) 
		setDisplayValue(value);
	else
		document.getElementById('display').value+=value;	
}


function one () {addToDisplay('1');}
function two () {addToDisplay('2');}
function three () {addToDisplay('3');}
function four () {addToDisplay('4');}
function five () {addToDisplay('5');}
function six () {addToDisplay('6');}
function seven () {addToDisplay('7');}
function eight () {addToDisplay('8');}
function nine () {addToDisplay('9');}

function zero () {addToDisplay('0');}
function decimal () {addToDisplay('.');}

function plus () {addToDisplay('+');}
function minus () {addToDisplay('-');}
function product () {addToDisplay('*');}
function devide () {addToDisplay('/');}

function ac(){setDisplayValue("0");clearAna();clearAna2();}
function del()
{
	var n=getDisplayValue();
	setDisplayValue(n.substr(0,n.length-1));
}

function root2()
{
	var n=eval(getDisplayValue());
	n=Math.sqrt(n);
	setDisplayValue(n);
}
function triSin()
{
	var n=eval(getDisplayValue());
	n=Math.sin(n);
	setDisplayValue(n);	
}
function triCos()
{
	var n=eval(getDisplayValue());
	n=Math.cos(n);
	setDisplayValue(n);	
}
function triTan()
{
	var n=eval(getDisplayValue());
	n=Math.tan(n);
	setDisplayValue(n);	
}
function Log10 () {
	var n=eval(getDisplayValue());
	n=Math.log10(n);
	setDisplayValue(n);		
}
function Log2 () {
	var n=eval(getDisplayValue());
	n=Math.log2(n);
	setDisplayValue(n);		
}
function LogE () {
	var n=eval(getDisplayValue());
	n=Math.log(n);
	setDisplayValue(n);		
}
function degToRed(){
	var n=eval(getDisplayValue());
	n=(Math.PI)/180.0*n;
	setDisplayValue(n);			
}
function redToDeg()
{
	var n=eval(getDisplayValue());
	n=180.0/(Math.PI)*n;
	setDisplayValue(n);				
}

function ext(value)
{
	if(document.getElementById('sci').style.display=='none')
	document.getElementById('sci').style.display='block';
	else
		document.getElementById('sci').style.display='none';

}

function equal () {

	var displayValue = getDisplay();
	if( displayValue.length > 12 ){
		setDisplayValue("The number is large!");
	}
	else{


	setDisplayValue(eval(getDisplayValue()));
	clearAna();
	analysis();	
	}
}

//Analysis
function clearAna()
{document.getElementById('ana').innerHTML="";}

function clearAna2()
{document.getElementById('ana2').innerHTML="";}

function addAna2(value)
{
	document.getElementById('ana2').innerHTML+=value;
}

function anaNum(value)
{
	var N="<span id='num'>"+value+"<span>";
	return N;
}



function addToAna(value)
{
	document.getElementById('ana').innerHTML+=value;
}
function analysis()
{
	clearAna2();
	var DisplayValue=getDisplayValue();

	addToAna(anaNum(DisplayValue));
	addToAna("<hr>");
	if(DisplayValue<0)
		addToAna("Negative Number<br>");
	else if(DisplayValue.indexOf('.')!=-1)
		{
			addToAna("Fractional Number<br>");
			var pos=DisplayValue.indexOf('.');
			var pow=getDisplayValue().length;
			pow=pow-pos-1;
			var power=1;
			for(var i=0;i<pow;i++)
				power*=10;
			var up=getDisplayValue()*power;
			var com=GCD(up,power);
			up=up/com;
			power=power/com;
			addToAna(anaNum(up)+"/"+anaNum(power));

		}
	else{

	if(isPrime(DisplayValue))
	addToAna("<span id='prime'> Prime Number <span><hr>");

	addToAna("Binary: "+getDisplayIntValue().toString(2)+"<br>");
	addToAna("Ternary: "+getDisplayIntValue().toString(3)+"<br>");
	addToAna("4-base: "+getDisplayIntValue().toString(4)+"<br>");
	addToAna("5-base: "+getDisplayIntValue().toString(5)+"<br>");
	addToAna("6-base: "+getDisplayIntValue().toString(6)+"<br>");
	addToAna("7-base: "+getDisplayIntValue().toString(7)+"<br>");
	addToAna("Octal: "+getDisplayIntValue().toString(8)+"<br>");
	addToAna("9-base: "+getDisplayIntValue().toString(9)+"<br>");
	addToAna("10-base: "+getDisplayIntValue().toString(10)+"<br>");
	addToAna("Hexadecimal: "+getDisplayIntValue().toString(16)+"<br>");	
	addToAna("<hr>");
	addToAna("&copy;astrolion<hr>");
	

	divisors();
	
	}
}

//prime
function isPrime(value) {
	if(value==1) return false;
	if(value==2) return true;
	if(value%2==0) return false;
	var len=parseInt(Math.sqrt(value));
	for(var i=3;i<=len;i+=2)
	{
		if(value%i==0)return false;
	}
	return true;
}

function divisors () {
	clearAna2();
	var count=0;
	var primeCount=0;
	var n=getDisplayIntValue();
	var lim=parseInt(Math.sqrt(n));

	var li=[];

	for(var i=1;i<=lim;i++)
	{
		if(n%i==0)
		{
			li[count++]=i;
			var re=parseInt(n/i);
			if(i!=re)
			{
				li[count++]=re;
			}
		}
	}

	li.sort(function(a, b){return a-b});
	var re="";
	
	for(var i=0;i<count;i++)
	{
		if(isPrime(li[i]))
		{
			re+="<span id='divPrime'>"+li[i]+"</span>";
			primeCount++;
		}
		else
			re+="<span id='divNor'>"+li[i]+"</span>";
		if(i!=count-1)
			re+=',';
		if(i%4==0)
			re+="<br>";
	}

	addAna2("Divisors: "+count+"<br>");
	addAna2("<span id='divPrime'>Primes divisors: "+primeCount+"</span><br>");
	addAna2(re);
}

//gcd
function GCD(a,b) {
	return b?GCD(b,a%b):a;
}

//time
setInterval(astrotime,1000);
function astrotime () {
	var now=new Date();
	var hour=now.getHours();
	var minute=now.getMinutes();
	var second=now.getSeconds();
	
	var sess="";
	var mod_hours=(hour%12);
	var div_hours=parseInt(hour/12);

	if(hour==0)
	{
		hour=12+'';
		mod_hours=12;
		sess='Night';
	}

	else if(hour==12)
	{
		hour=12+'';
		mod_hours=12;
		sess='Noon';
	}

	else if(div_hours==1 && mod_hours>=1 && mod_hours<=2)
	{
		//hour='0'+hour;
		sess='Lazy Time';
	}

	else if(div_hours==1 && mod_hours>=3 && mod_hours<=5)
	{
		//hour='0'+hour;
		sess='Good Afternoon';
	}

	else if(div_hours==1 && mod_hours>=6 && mod_hours<=7)
	{
		sess='Evening';
	}

	else if(div_hours==1 && mod_hours>=8 && mod_hours<=11)
	{
		sess='Night';
	}

	else if(div_hours==0 && mod_hours>=1 && mod_hours<=2)
	{
		sess='Middle Night';
	}
	else if(div_hours==0 && mod_hours>=3 && mod_hours<=4)
	{
		sess='Deep Night';
	}
	else if(div_hours==0 && mod_hours>=5 && mod_hours<=6)
	{
		sess='Noon';
	}
	else if(div_hours==0 && mod_hours>=6 && mod_hours<=11 )
	{
		sess='Good Morning';
	}
    
    var hour_final=mod_hours+'';
    if(hour_final.length==1)
    	hour_final='0'+hour_final;

    var final_minute=minute+'';
    if(final_minute.length==1)
    	final_minute='0'+final_minute;

    var final_second=second+'';
    if(final_second.length==1)
    	final_second='0'+final_second;

	var time_now=sess+" "+hour_final+":"+final_minute+":"+final_second;
	document.getElementById('clock').innerHTML=time_now;
}




