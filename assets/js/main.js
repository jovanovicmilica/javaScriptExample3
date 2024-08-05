let url=location.href;

let nav=['Home','Services','Contact','Author'];
let path=['index.html','services.html','contact.html','author.html'];
let services=['Cardiology','Dental','Eye Care','Neurology'];
let percent=[90,80,75,82];
getNavigation();
getFooter();


if(url.indexOf("index.html")!=-1){
    getServicesDescription();
    getSlick();
    getSkills();
    getSlider();

    $(window).on('scroll',function () {
        if(isScrolledIntoView()){
            if($('.skills').hasClass('counter')){
                let skills=document.getElementsByClassName('percentColor')
                for(let i=0;i<skills.length;i++){
                    skills[i].animate({width: percent[i]+'%'},3000)
                }
                $('.skills').removeClass('counter')
                getEndSkills()
            }
        }
    })
}
if(url.indexOf("contact.html")!=-1){
    getContact();
    getDdl()
}
if(url.indexOf("services.html")!=-1){
    getServicesList();
    getServices();
}

function getNavigation(){

    let print='';

    print+=`<ul class="d-flex justify-content-between m-0">`;

    for(let i=0;i<nav.length;i++){
        print+=`<li><a href="${path[i]}" class="fs-5 text-primary`;
        
        print+=`">${nav[i]}</a></li>`;
    }

    print+=`</ul>`;
    document.getElementById("navigation").innerHTML=print;
}




$("#hamburger a").click(getMobileNav);

function getMobileNav(e){
    e.preventDefault();

    if($("#navMobile").hasClass("default")){
        console.log("TU")
        // if($("#navMobile").hasClass("default")){
        //     $("navMobile").html("")
        // }
        let print='';

        // print+=`<a href='#' id='close'><i class='fa fa-times text-light'></i></a>`;
        print+=`<ul>`;

        for(let i=0;i<nav.length;i++){
          print+=`<li class="my-2 py-1"><a href="${path[i]}" class="text-primary py-1 fs-5">${nav[i]}</a></li>`;
        }

        print+=`</ul>`;
        $('#navMobile').removeClass('default');
        $('#navMobile').html(print);

        $('#navMobile').addClass('py-3')
        // $("nav").removeClass('d-none')
        // $("#hamburger a").html(`<i class="fas fa-times fs-4 mx-2"></i>`)
    }
    else{
        console.log("TUd")
        $('#navMobile').html('');
        $('#navMobile').removeClass('py-3')
        $('#navMobile').addClass('default');
    }
}



function getServicesDescription(){
    let icon=['fas fa-user-md','fas fa-heartbeat','fas fa-tooth'];
    let heading=['Eye Care Services','Cardiology Services','Dental Services'];
    let text=['Eye care is the provision of appropriate, accessible, and affordable care that meets patients’ eye care needs in a comprehensive and competent manner.','Our cardiology services, including cardiac rehabilitation and stress testing, are here to help you manage and treat your heart health no matter what you might need.','We provide comprehensive treatment and skilled dental services that address both your short- and long-term dental care needs in an honest.'];

    let print='';
    for(let i=0;i<icon.length;i++){
        print+=`<div class='col-12 col-md-3 bg-white p-3 my-2'>
                    <div class='d-flex justify-content-between align-items-center my-3'>
                        <i class='${icon[i]} fs-2'></i>
                        <span class='fs-2 fw-bold'>0${i+1}</span>
                    </div>
                    <h3>${heading[i]}</h3>
                    <hr/>
                    <p>${text[i]}</p>
                </div>`;
    }

    $("#serviceDescription").html(print);
}

function getSlick(){
    let sliderImages=['slick1.png','slick2.png','slick3.png','slick4.png','slick5.png'];

    let print='';
    for(let i=0;i<sliderImages.length;i++){
        print+=`<div class='px-5'>
                <img src='assets/images/${sliderImages[i]}' alt='Slider image' class='img-fluid'/>
            </div>`
    }

    $(".sponsors").html(print);

    $('.sponsors').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 604,
            settings: {
              slidesToShow: 2,
            //   slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        ]
      });
}

function getSkills(){
    let heading=['Client Satisfaction','Medic Success','Client Referral','Travel Satisfaction'];

    let print='';

    for(let i=0;i<heading.length;i++){
        print+=`<div class='my-2'>
                    <h3>${heading[i]}</h3>
                    <div class='d-flex align-items-center justify-content-between'>
                        <div class='skills bg-white counter'>
                            <div class='percentColor bg-primary' ></div>
                        </div>
                        <p class='m-0'>${percent[i]}%</p>
                    </div>
                </div>`;
    }

    document.getElementById("skills").innerHTML=print;

}

function getEndSkills(){
    setTimeout(function(){
        let skills=document.getElementsByClassName('percentColor')
        for(let i=0;i<skills.length;i++){
            skills[i].style.width=percent[i]+'%'
        }
    },3000)
}

function isScrolledIntoView() {
    ///deo sa interneta
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $("#skills").offset().top;
    var elemBottom = elemTop + $("#skills").height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function getSlider(){
    let images=['slider.jpg','slider2.jpg','slider3.jpg'];
    let imgTag=document.querySelector("#slider");
    let counter=0;

    function slider(){
        imgTag.src='assets/images/'+images[counter];
        if(counter<images.length-1) counter++;
        else counter=0;
        setTimeout(slider, 3000);
        };
        slider();
}


function getContact(){
    let icon=['fas fa-map-marker-alt','fa fa-phone','fa fa-envelope'];
    let heading=['Our Location','Our Contact','Mail Us'];
    let text=['Pin Oak, London','+ (567) 1234-567-8900','info@medicate.com'];

    let print='';
    for(let i=0;i<icon.length;i++){
        print+=`<div class='col-12 col-md-3 p-5 bg-light text-center my-2'>
                <i class='${icon[i]} p-4 bg-primary text-light fs-3 mb-3'></i>
                <h2>${heading[i]}</h2>
                <p>${text[i]}</p>
            </div>`;
    }

    document.getElementById("contact").innerHTML=print;
}

function getServicesList(){

    let print='<ul class="p-0">';
    for(let i=0;i<services.length;i++){
        print+=`<li class='bg-white p-3 my-3'>
                <a href='#' data-id='${i}' class='d-flex align-items-center justify-content-between selectService'>${services[i]} Service 
                <i class='fas fa-chevron-right text-primary'></i></a>
            </li>`;
    }

    print+='</ul>';

    document.getElementById('servicesList').innerHTML=print;

    $(".selectService").click(showService)
}

function getServices(){
    let text=['Cardiology care is complex and evolving rapidly. Medicate Healthcare is devoted to providing cardiology solutions that help you deliver better outcomes, helping you optimize and personalize your patients\' care. Keeping your heart healthy and strong is crucial to your overall well-being. Our cardiology services, including cardiac rehabilitation and stress testing, are here to help you manage and treat your heart health no matter what you might need.','At Medicate Healthcare, we do anything to make you smile. And your care team will be with you every step of the way on your journey to great oral health. We provide comprehensive treatment and skilled dental services that address both your short- and long-term dental care needs in an honest, judgment-free environment where our main goal is always to give you the care you need when you need it. ','Eye care is the provision of appropriate, accessible, and affordable care that meets patients’ eye care needs in a comprehensive and competent manner. Primary eye care provides the patient with the first contact for eye care as well as a lifetime of continuing care. Primary eye care services are integrated to meet the needs of patients from a single source so patients receive quality, efficient eye care that is coordinated with general health care services. Competent and expert management and decision-making are critical in promoting the quality and efficiency of primary eye care.','Headaches, tremors, numbness and memory lapses are all potential signs of a neurological problem that can hinder your daily activities. Neurologists in the Medicate Healthcare network provide comprehensive consultation, evaluation and treatment for a variety of neurological disorders. When something goes wrong with your nervous system, you want a doctor who can determine the cause of your problem and help you feel better. Highly trained neurologists in the Medicate Healthcare network use advanced imaging techniques and the latest devices available to diagnose and treat disorders of the brain, spine or central nervous system.'];

    let print='<div class="row">';
    for(let i=0;i<text.length;i++){
        print+=`<div class='col-12 d-none service'>
                    <h2>${services[i]} Service</h2>
                    <p class='fs-5'>${text[i]}</p>
            </div>`;
    }

    print+=`</div>`;

    document.getElementById("services").innerHTML+=print;
    document.getElementsByClassName('service')[0].classList.remove('d-none');
}

function showService(e){
    e.preventDefault();
    let id=this.dataset.id;

    $(".service").addClass('d-none');
    document.getElementsByClassName('service')[id].classList.remove('d-none');
}

////contact

function getDdl(){
    let print='';
    for(let i=0;i<services.length;i++){
        print+=`<option value='${i}'>${services[i]}</option>`;
    }

    document.getElementById("ddlServices").innerHTML+=print;
}

$("#buttonMessage").click(sendMessage);
$("#name").keyup(validateName);
$("#email").keyup(validateEmail);
$("#phone").keyup(validatePhone);
$("#ddlServices").change(validateDdl);
$("#message").keyup(validateMessage);
$("input[name='pacient']").change(validateRb)

function formValidation(input,regularExpression){
    var error=0;
    if(!regularExpression.test(input.value)){
        error++;
        input.parentElement.nextElementSibling.classList.remove('d-none');
    }
    else{
        input.parentElement.nextElementSibling.classList.add('d-none');
    }
    return error;
}

function keyupValidate(input,regularExpression){
    if(!regularExpression.test(input.value)){
        input.classList.add("border-danger");
        input.classList.remove("border-success");
        input.parentElement.nextElementSibling.classList.remove('d-none');
    }
    else{
        input.classList.add("border-success");
        input.classList.remove("border-danger");
        input.parentElement.nextElementSibling.classList.add('d-none');
    }
}

var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var regName=/^[A-ZŽĐŠĆČ][a-zžđšćč]{2,}(\s[A-ZŽĐŠĆČ][a-zžđšćč]{2,}){1,2}$/;
var regPhone=/^06[012345679]\d{6,7}$/;

function validateName(){
        var name=document.getElementById("name");
        keyupValidate(name,regName);
    }
function validatePhone(){
    var name=document.getElementById("phone");
    keyupValidate(name,regPhone);
}
function validateEmail(){
    var name=document.getElementById("email");
    keyupValidate(name,regEmail);
}
    
function validateMessage(){
    var message=document.getElementById("message");
    if(message.value.trim().split(" ").length<5){
        message.parentElement.nextElementSibling.classList.remove('d-none');
        message.classList.add("border-danger");
        message.classList.remove("border-success");
    }
    else{
        message.parentElement.nextElementSibling.classList.add('d-none');
        message.classList.remove("border-danger");
        message.classList.add("border-success");
    }
}
function validateDdl(){
    var guestsNumber=document.getElementById("ddlServices");
    if(guestsNumber.value==""){
        guestsNumber.parentElement.nextElementSibling.classList.remove('d-none');
        guestsNumber.classList.add("border-danger");
        guestsNumber.classList.remove("border-success");
    }
    else{
        guestsNumber.parentElement.nextElementSibling.classList.add('d-none');
        guestsNumber.classList.remove("border-danger");
        guestsNumber.classList.add("border-success");
    }
}

function validateRb(){
    var pacient=document.getElementsByName("pacient");
    for(let i=0;i<pacient.length;i++){
        if(pacient[i].checked){
            document.getElementById("pacient").classList.add('d-none');
            break;
        }
        else{
            document.getElementById("pacient").classList.remove('d-none');
        }
    }
}

function sendMessage(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var message=document.getElementById("message");
    var guestsNumber=document.getElementById("ddlServices");
    var phone=document.getElementById("phone");
    var pacient=document.getElementsByName("pacient");
    var error=0;
    error+=formValidation(name,regName);
    error+=formValidation(email,regEmail);
    error+=formValidation(phone,regPhone);

    let rbCheck=0;
    if(message.value.trim().split(" ").length<5){
        message.parentElement.nextElementSibling.classList.remove('d-none');
        error++
    }
    else{
        message.parentElement.nextElementSibling.classList.add('d-none');
    }
    if(guestsNumber.value==""){
        guestsNumber.parentElement.nextElementSibling.classList.remove('d-none');
        error++
    }
    else{
        guestsNumber.parentElement.nextElementSibling.classList.add('d-none');
    }
    for(let i=0;i<pacient.length;i++){
        if(pacient[i].checked){
            rbCheck++;
        }
    }
    if(rbCheck==1){
        document.getElementById("pacient").classList.add('d-none');
    }
    else{
        document.getElementById("pacient").classList.remove('d-none');
        error++;
    }
    if(error==0){
        document.getElementById('textMessage').classList.remove('d-none');
        setTimeout(function(){
            document.getElementById('textMessage').classList.add('d-none');
        },3000)
        $("input[type='text']").val("");
        $("textarea").val("");
        $("input[type='text']").removeClass("border-success");
        $("textarea").removeClass("border-success");
        $("select").removeClass("border-success");
        for(let i=0;i<pacient.length;i++){
            pacient[i].checked=false
        }
        document.getElementById("ddlServices").selectedIndex=0;
    }
}

function getFooter(){
    var ispis=''
    ispis+=`<div class="col-4">
                <a href="index.html" class="fs-1 text-decoration-none text-dark">
                    <img src='assets/images/logo.png' alt='Logo'/>
                </a>
                <p>Open 24h</p>
            </div>
            <div class="col-4">
                <h4 class="fs-3">Contact</h4>
                <p>Pin Oak, London</p>
                <p>+ (567) 1234-567-8900</p>
                <p>info@medicate.com</p>
            </div>
            <div class="col-4 text-center">
                <h4 class="fs-3">Social networks</h4>
                <a class="mx-3 fs-3" href="https://www.facebook.com/" target="_blank"><i
                class="fab fa-facebook-f"></i></a>
                <a class="mx-3 fs-3" href="https://www.instagram.com/" target="_blank"><i
                class="fab fa-instagram"></i></a>
                <a class="mx-3 fs-3" href="https://www.twitter.com/" target="_blank"><i
                class="fab fa-twitter"></i></a>
                <br/>
                <a class="mx-3 fs-4 text-decoration-none" href="documentation.pdf"
                target="_blank">Documentation</a>
            </div>`;
    $("#footer").html(ispis);
}