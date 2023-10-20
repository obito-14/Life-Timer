 fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    // ----------------------------------------1-----------------------------------------
    document
    .getElementById("profile_img")
    .setAttribute("src",data[7].avatar_url);
    document
    .getElementById("username").innerText = data[7].login;
    document
    .getElementById("profile_btn")
    .setAttribute("href",data[7].html_url);
    // ----------------------------------------2-----------------------------------------
    document
    .getElementById("profile_img2")
    .setAttribute("src",data[19].avatar_url);
    document
    .getElementById("username2").innerText = data[19].login;
    document
    .getElementById("profile_btn2")
    .setAttribute("href",data[19].html_url);
    // ----------------------------------------3-----------------------------------------
    document
    .getElementById("profile_img3")
    .setAttribute("src",data[4].avatar_url);
    document
    .getElementById("username3").innerText = data[4].login;
    document
    .getElementById("profile_btn3")
    .setAttribute("href",data[4].html_url);
    // ----------------------------------------4-----------------------------------------
    document
    .getElementById("profile_img4")
    .setAttribute("src",data[21].avatar_url);
    document
    .getElementById("username4").innerText = data[21].login;
    document
    .getElementById("profile_btn4")
    .setAttribute("href",data[21].html_url);
    // ----------------------------------------5-----------------------------------------
    document
.getElementById("profile_img5")
.setAttribute("src",data[15].avatar_url);
document
.getElementById("username5").innerText = data[15].login;
document
.getElementById("profile_btn5")
.setAttribute("href",data[15].html_url);
// ----------------------------------------6-----------------------------------------
document
.getElementById("profile_img6")
.setAttribute("src",data[1].avatar_url);
document
.getElementById("username6").innerText = data[1].login;
document
.getElementById("profile_btn6")
.setAttribute("href",data[1].html_url);
// ----------------------------------------7-----------------------------------------
document
.getElementById("profile_img7")
.setAttribute("src",data[6].avatar_url);
document
.getElementById("username7").innerText = data[6].login;
document
.getElementById("profile_btn7")
.setAttribute("href",data[6].html_url);
// ----------------------------------------8-----------------------------------------
document
.getElementById("profile_img8")
.setAttribute("src",data[10].avatar_url);
document
.getElementById("username8").innerText = data[10].login;
document
.getElementById("profile_btn8")
.setAttribute("href",data[10].html_url);
// ----------------------------------------9-----------------------------------------
document
.getElementById("profile_img9")
.setAttribute("src",data[20].avatar_url);
document
.getElementById("username9").innerText = data[20].login;
document
.getElementById("profile_btn9")
.setAttribute("href",data[20].html_url);
// ----------------------------------------10-----------------------------------------
document
.getElementById("profile_img10")
.setAttribute("src",data[26].avatar_url);
document
.getElementById("username10").innerText = data[26].login;
document
.getElementById("profile_btn10")
.setAttribute("href",data[26].html_url);
// ----------------------------------------11-----------------------------------------
document
.getElementById("profile_img11")
.setAttribute("src",data[28].avatar_url);
document
.getElementById("username11").innerText = data[28].login;
document
.getElementById("profile_btn11")
.setAttribute("href",data[28].html_url);
// ----------------------------------------12-----------------------------------------
document
.getElementById("profile_img12")
.setAttribute("src",data[23].avatar_url);
document
.getElementById("username12").innerText = data[23].login;
document
.getElementById("profile_btn12")
.setAttribute("href",data[23].html_url);
})