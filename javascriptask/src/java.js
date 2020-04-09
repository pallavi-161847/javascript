var a=document.getElementsByClassName("frst")[0];
a.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
var ilist=document.getElementsByClassName("img1");
var head=document.getElementById("hea");
for(var i=0;i<ilist.length;i++)
ilist[i].onmouseover=function()
{
	a.style.backgroundImage="url("+this.src+")",
	this.style.borderRadius="20px",
	this.style.border="2px solid red",
	head.style.backgroundColor="#d8e8cc",
	head.style.borderRadius="20px",
	head.style.padding="5px"
},
ilist[i].onmouseleave=function()
{
	a.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)",
	head.style.backgroundColor="transparent",
	this.style.borderRadius="0px",
	this.style.border="0px solid red"
};
function Age()
{
	var ed=(ed=document.getElementById("birth").value).split("/"),
	t=document.getElementById("dob");
	if(3==ed.length)
	{
		var cu=new Date;
		const en=new Date(ed[1]+"/"+ed[0]+"/"+ed[2]),
		p=new Date(cu.getDate()+"/"+cu.getMonth()+"/"+cu.getFullYear()),
		l=Math.abs(p-en),
		d=Math.ceil(l/864e5);
		t.innerHTML="==>You are "+d+" days old!!",
		t.style.color="#2809ed"
}
else
	 t.innerHTML="==>Date Of Birth is not in Specified Format",
	t.style.color="red"
}
function randomcolor()
{
    var r = function () 
	 { 
		return Math.floor(Math.random()*256)
	 };
   return "rgb(" + r() + "," + r() + "," + r() + ")";
}
function color()
{
	var c1=randomcolor();
	var c2=document.getElementById("random");
	var c3=document.getElementById("colo");
	c2.style.backgroundImage="linear-gradient("+c1+","+c1+")"
	c3.style.color=randomcolor();
}
