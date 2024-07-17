
function isEmployesOpen(element) {
    const subMenu = element.nextElementSibling;
    subMenu.classList.toggle('open');
    element.classList.toggle('open');

    const icon = element.querySelector('.fas');

    if (subMenu.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}


function isChecklistOpen(element) {
    const subMenu = element.nextElementSibling;
    subMenu.classList.toggle('open');
    element.classList.toggle('open');

    const icon = element.querySelector('.fas');

    if (subMenu.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }

}


function isTimeOpen(element) {
    const subMenu = element.nextElementSibling;
    subMenu.classList.toggle('open');
    element.classList.toggle('open');

    const icon = element.querySelector('.fas');

    if (subMenu.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}


function isAttendanceOpen (element){
    const subMenu = element.nextElementSibling;
    subMenu.classList.toggle('open');
    element.classList.toggle('open');

    const icon = element.querySelector('.fas');

    if (subMenu.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

function isPayrollOpen(element){
    const subMenu = element.nextElementSibling;
    subMenu.classList.toggle('open');
    element.classList.toggle('open');

    const icon = element.querySelector('.fas');

    if (subMenu.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

function isRecruitmentOpen(element){
    const subMenu = element.nextElementSibling;
    subMenu.classList.toggle('open');
    element.classList.toggle('open');

    const icon = element.querySelector('.fas');

    if (subMenu.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}


function humbargerBtn() {
    document.getElementById('mobileMenu').classList.add('active');
}

function closeBtn() {
    document.getElementById('mobileMenu').classList.remove('active');
}