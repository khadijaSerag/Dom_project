
// var item = document.getElementsByClassName("item");// فلازم احدد انه يضغط على الصورة مش الايتيم كلهitem-title مش هنعملها بدى لانه هيطلع ايرور لو اتك على الديف اللى اسمها 
var item = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var currentIdexImg = 0;
var arrowRight = document.getElementById("arrowRight");
var arrowLeft = document.getElementById("arrowLeft");
var closeItem = document.getElementById("close");


for (var i = 0; i < item.length; i++) {

    var myitem = item[i].addEventListener("click", function (eventInfo) {

        // دى عشان تروح هناك فى السى اس اس وتغير الديسبلاى نان لديسبلاى فليكس عشان لما اضغط على الصورة يعرضلى اللايتبوكس
        lightBoxContainer.style.display = "flex";

        // من هنا بقا هنبدا نستخدم الانبوت انفوا عشان لما اضغط على صورة معينة هى اللى تطلع
        var myImg = eventInfo.target.src;
        lightBoxItem.style.backgroundImage = "url(" + myImg + ")";

        currentIdexImg = item.indexOf(eventInfo.target);
        console.log(currentIdexImg);
    })
}
// فانكشن السهم اليمين 
function nextSlide() {
    currentIdexImg++;
    if (currentIdexImg == item.length) {
        currentIdexImg = 0;
    }
    // myImg = item[currentIdexImg].getAttribute("src");
    myImg = item[currentIdexImg].src;
    lightBoxItem.style.backgroundImage = "url(" + myImg + ")";
}
arrowRight.addEventListener("click", nextSlide);

// فانكشن السهم الشمال 
function previousSlide() {
    currentIdexImg--;
    if (currentIdexImg < 0) {
        currentIdexImg = item.length - 1;
    }
    // myImg = item[currentIdexImg].getAttribute("src");
    myImg = item[currentIdexImg].src;
    lightBoxItem.style.backgroundImage = "url(" + myImg + ")";

}
arrowLeft.addEventListener("click", previousSlide);

// فانكشن الايكونة اكس دى 
closeItem.addEventListener("click", function () {
    lightBoxContainer.style.display = "none";
})

// اعملها ازاى لما اتك على مكان فاضى تقفل ؟؟
// var outWidth=lightBoxContainer.setAttribute("width","674.5");
// var outHeight=lightBoxContainer.setAttribute("height","450")
// if(outWidth.addEventListener("click")==false && outHeight.addEventListener("click")==false){
//     lightBoxContainer.style.display = "none"
// }


// دى عشان الكيبورد تشتغل لما اضغط على زرار اليفت والرايت يقلبوا والاسكيب يقفل 
document.addEventListener("keydown", function (eventInfo) {

    if (eventInfo.code == "ArrowRight") {
        nextSlide();
    }
    else if (eventInfo.code == "ArrowLeft") {
        previousSlide()
    }
    else if (eventInfo.code == "Escape") {
            lightBoxContainer.style.display = "none";
    }
})
