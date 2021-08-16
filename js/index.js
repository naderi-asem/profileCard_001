const prfPerson = document.querySelector('.profile-person');
const prfContent = document.querySelector('.profile-content');
const cardBox = document.querySelector('.card-Box');
const animationTagP = document.querySelectorAll('p.animate__animated');
const animationTagH3 = document.querySelectorAll('.h3');
let screenChange = window.matchMedia("(max-width: 768px)");

cardBox.addEventListener('mouseup', () => {
    if (document.documentElement.clientWidth <= 768) {
        prfPerson.style.width = '80%';
        prfPerson.style.cursor = 'auto';
        cardBox.style.width = 'inherit';
        cardBox.style.height = '660px';
        prfContent.style.display = 'flex';
        for (item of animationTagP)
            item.classList.add('animate__backInUp');
        for (elem of animationTagH3)
            elem.classList.add('animate__backInRight');
    }
    else {
        prfPerson.style.width = '50%';
        prfPerson.style.cursor = 'auto';
        cardBox.style.width = '600px';
        cardBox.style.height = 'auto';
        prfContent.style.display = 'flex';
        for (elem of animationTagP)
            elem.classList.add('animate__backInUp');
        for (elem of animationTagH3)
            elem.classList.add('animate__backInRight');
    }
});

cardBox.addEventListener('mouseleave', () => {
    if (document.documentElement.clientWidth <= 768) {
        prfPerson.style.width = '80%';
        prfPerson.style.cursor = 'pointer';
        cardBox.style.width = 'inherit';
        cardBox.style.height = '420px';
        prfContent.style.display = 'none';
        for (item of animationTagP)
            item.classList.remove('animate__backInUp');
        for (elem of animationTagH3)
            elem.classList.remove('animate__backInRight');
    }
    else {
        prfPerson.style.width = 'auto';
        prfPerson.style.cursor = 'pointer';
        cardBox.style.width = '300px';
        cardBox.style.height = 'auto';
        prfContent.style.display = 'none';
        for (elem of animationTagP)
            elem.classList.remove('animate__backInUp');
        for (elem of animationTagH3)
            elem.classList.remove('animate__backInRight');
    }
});

screenChange.addEventListener('change', () => {
    if (document.documentElement.clientWidth <= 768) {
        prfPerson.style.width = '80%';
        prfPerson.style.cursor = 'pointer';
        cardBox.style.width = 'inherit';
        cardBox.style.height = '420px';
        prfContent.style.display = 'none';
        for (item of animationTagP)
            item.classList.remove('animate__backInUp');
        for (elem of animationTagH3)
            elem.classList.remove('animate__backInRight');
    } else {
        prfPerson.style.width = 'auto';
        prfPerson.style.cursor = 'pointer';
        cardBox.style.width = '300px';
        cardBox.style.height = 'auto';
        prfContent.style.display = 'none';
        for (elem of animationTagP)
            elem.classList.remove('animate__backInUp');
        for (elem of animationTagH3)
            elem.classList.remove('animate__backInRight');
    }
});



