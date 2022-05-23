
var a=prompt('შეიყვანეთ გროს ანაზღაურება');
var b=20;
var c=2;
var gross=parseInt(a);
var sashemosavlo=parseInt(b);
var sapensio=parseInt(c);
var net=gross - gross * sashemosavlo/100;
sum=net- net * sapensio/100;
alert("ნეტ ანაზღაურება არის" + " " + sum);
var income=sum;
if (income<700){
    alert("დაბალი ხელფასი");
}
else if (income>=700 && income<2000){
    alert("საშუალო ხელფასი");
}
else if(income>=2000 && income<2500){
    alert("კარგი ხელფასი");
}
else if(income>=2500 && income<3000){
    alert("ძალაინ კარგი ხელფასი");
}
else{
    alert("$ რაც უფრო მეტი უკეთესი $");
}

var info=[
    ["tbilisi", "Barcelona", "Milan"],
    [25,30,35],
    ["Mariami", "Ann", "Luca"]
];
var first=info[0][2];
var second=info[1][1];
var third=info[2][2];
var sum= first + " " + second + " " + third;
document.getElementById("demo").innerHTML=sum;


