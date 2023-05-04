// Declare your genre arrays here

let socialSkills=[{ src:'https://pictures.abebooks.com/isbn/9788190646604-us.jpg', alt:"A picture of the book 'How to win friends and influence people by Dale Carnegie'", href:"https://fourminutebooks.com/how-to-win-friends-and-influence-people-summary/"}, {src:'https://media.licdn.com/dms/image/C4D12AQHM_z6UcykkEw/article-cover_image-shrink_720_1280/0/1626331338899?e=2147483647&v=beta&t=WTpkBVlgPlQohbwW9dcu8zYVDvoJGKU7O6gKBVTYGT8',alt:"Picture of the book 'What everybody is saying by Joe Navarro and Marvin Carlines'", href:"https://www.goodreads.com/book/show/1173576.What_Every_Body_is_Saying"},{src:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51i1mU8hJjS._AC_UF1000,1000_QL80_.jpg', alt:"Picture of the book 'The definitive book of body language by Allan & Barabara Peace'", href:"https://www.goodreads.com/book/show/262731.The_Definitive_Book_of_Body_Language"}];
                   
console.log(socialSkills);

let psychological=[{src:'https://is3-ssl.mzstatic.com/image/thumb/Publication124/v4/84/51/c0/8451c075-8ce4-90ec-5384-8c95da7a5d3b/9780593083321.d.jpg/1200x600wz.png', alt:"Picture of the book 'Personality Is not permanent' by Benjamin Hardy", href:"https://www.penguinrandomhouse.com/books/607021/personality-isnt-permanent-by-benjamin-hardy-phd/"},{src:'https://investorship.com/wp-content/uploads/2020/01/Thinking-Fast-and-Slow-218x300.jpg', alt:"Picture of the book 'Thinking fast and slow' by Daniel Kahneman",href:"https://books.google.com/books/about/Thinking_Fast_and_Slow.html?id=ZuKTvERuPG8C"},{src:'https://dzvinkazavaliy.files.wordpress.com/2015/08/photo-47.jpg',alt:"Picture of the book 'Predictable irrational' by Dan Ariely"}];

console.log(psychological);

let finances=[{src:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51AHZGhzZEL.jpg',alt:"Picture of the book 'Rich Dad Poor Dad'by ROBERTT KIYOSAKI. ", href:"https://finmasters.com/rich-dad-poor-dad-review/#gref"},{src:'https://play-lh.googleusercontent.com/XqwhJTmrOpRrZeL4k75l68MUVJeMdz1aW_nbGkYM0gdb7TKF5xx2M84UWtfhb5MG_VT8_3QlbJm6vA',alt:"Picture of the book'The total money makeover' by Dave Ramsey.", href:"https://www.ramseysolutions.com/store/books/the-total-money-makeover-by-dave-ramsey"},{src:'https://d1bh17hrbsh0lf.cloudfront.net/product/9781523505746/cover3d/9781523505746_3D.png', alt:"picture of the boook 'I will teach you to be rich' by Ramit Sethi ", href:"https://www.audible.com/mk/t/title-3?asin=B07QSC29JT&source_code=GO1PP30DTRIAL547051922911Q&device=d&cvosrc=ppc.google.i%20will%20teach%20you%20to%20be%20rich%20book&cvo_campaign=17318110200&cvo_crid=599757321027&Matchtype=p&ds_rl=1261256&gclid=CjwKCAjwrpOiBhBVEiwA_473dHeLChBCa9VZ9UOKxSU5xFn-UppO_3rNqT9IUxpQatkBwGLlHz4TShoCHhgQAvD_BwE&gclsrc=aw.ds"}];

console.log(finances);

/*Declaring variables for section one*/
let button1=document.querySelector(".S");

let Display=document.querySelector(".shows");
/*End of section 1*/

/*Section 1,displaying arrays*/
button1.onclick = function() {
  console.log("button clicked"); 
  let input1 = document.querySelector(".Input1").value;
  console.log("input1 value:", input1); 
  Display.innerHTML = ""; 
  
 if (input1 === "Social" || input1 === "social") {
  for (let mta of socialSkills) {
    let mtc = "<a href='" + mta.href + "'><img src=" + mta.src + " alt='" + mta.alt + "' /></a>";
    Display.insertAdjacentHTML("beforeend", mtc);
    }
  } 
    else if (input1 === "Psychological" || input1 === "psychological") {
    for (let URL of psychological) {
      let mtd = "<a href='"+URL.href+ "'><img src=" + URL.src + " alt='"+ URL.alt + "'/></a>";
      Display.insertAdjacentHTML("beforeend", mtd);
    }
  } 
    else if (input1 === "Finances" || input1 === "finances"){
  for (let mte of finances) {
    let mtf = "<a href='"+mte.href+ "'><img src=" + mte.src + " alt='"+ mte.alt + "'/></a>";
    Display.insertAdjacentHTML("beforeend", mtf);
  }
  }
    else if (input1){ console.log("input1 value is not Social||social");
                    console.log("input1 value is not psychological||Psychological");
                    console.log("input1 value is not Finances||finances ");}
 };
    let RTH=[];
console.log(RTH);
let Numberth=document.querySelector(".number");
let button2=document.querySelector(".S2");
button2.onclick=function(){{let input2=document.querySelector(".input2").value;
                let Optional=document.querySelector("#OPTIONAL");                 
  RTH.push(input2);
                         
                            Optional.innerHTML = "";
                                 let img = "<img src="+input2+">";
                            
  Optional.insertAdjacentHTML("beforeend","<p>"+ "Thank you for your recomendations"+"</p>");
  Optional.insertAdjacentHTML("beforeend", img);
   Numberth.textContent = RTH.length;
                      
}                          
};


