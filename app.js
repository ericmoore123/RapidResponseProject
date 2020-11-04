let userInfo = document.querySelector('.user-bio');
let userName = document.querySelector('.user-name');

const displayData = (member) => {
    const userData = [
        "I’m excited to learn and experience designing a mobile prototype for the Kinaxis RapidResponse software. I’m confident that we have a dynamic and innovative team that will make this prototype unique.",
        "Having the chance to learn from my peers while also collaborating with an industry leader in Kinaxis was an opportunity I couldn’t pass up. I look forward to expanding my design and development skills through this project and can’t wait to get started.",
        "I enjoy learning new things. So having a chance to work with a mobile app prototype for Kinaxis is such a great opportunity for me to apply my skills to transfer their excellent desktop version into a marvelous mobile prototype.",
        "I enjoy creating experiences that are user-friendly and I’m really excited to get hands-on experience on UI/UX projects that can help make a difference in the world.",
        "I am very interested and excited to work with Kinaxis and to actually be able to apply my marketing and design skills on a project that other people can use.",
        "I’m very passionate about the user experience and consider it to be one of the integral parts of any user facing interactive media! I look forward to learning and applying new skills to this project.",
    ];

    const userNames = [
        "Deka",
        "Eric",
        "Thao",
        "Nella",
        "Niki",
        "Radhika"
    ];

    for(let i = 0; i < userNames.length; i++){
        if(member == userNames[i]){
            userInfo.innerHTML = userData[i];
            userName.innerHTML = userNames[i];
        };
    };
};

const hideContent = () => {
    userInfo.innerHTML = null;
    userName.innerHTML = null;
};