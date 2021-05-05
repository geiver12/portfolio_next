const skills = [
    {
        skill: 'html+css+js',
        percentage: '95%'
    },
    {
        skill: 'php',
        percentage: '70%'
    },
    {
        skill: 'laravel (framework php)',
        percentage: '80%'
    },
    {
        skill: 'sass (pre-proccesor css)',
        percentage: '80%'
    },
    {
        skill: 'React.js',
        percentage: '80%'
    },
    {
        skill: 'next (framework react ssr)',
        percentage: '60%'
    },
    {
        skill: 'node.js',
        percentage: '80%'
    },
    {
        skill: 'angular',
        percentage: '70%'
    },
    {
        skill: 'java',
        percentage: '70%'
    },

];

const experiences = [
    {
        title: 'Londontours',
        description: 'Frontend development, design and develop views with html, css and js with php in the backend',
        from: '2017',
        to: '2017'
    },
    {
        title: 'pFind',
        description: 'Frontend,UX,UI, Designer with Bootstrap and other tecnologies',
        from: '2018',
        to: '2018'
    },
    {
        title: 'Millenial.Marketing',
        description: 'Frontend, UX,Ui, Designer an other rols',
        from: '2020',
        to: '2020'
    },
    {
        title: 'Autonomous',
        description: 'Software Developer',
        from: '2020',
        to: '2021'
    },

];

const projects = [
    {
        name: "App Countries React",
        description: "Basic app in react.js with bootstrap, font-awesome, ci/cd and other tools for development.",
        image: "app-countries.png",
        url: "https://xenodochial-goldberg-d0efa8.netlify.app/"
    },
    {
        name: "App-react-ant",
        description: "Project with react, manipulate the DOM, its used antd how framework of css, graphQL for querys data or an api, in this case rick and morty",
        image: "app-react-ant.png",
        url: "https://fervent-beaver-11ccbd.netlify.app/"
    },
    {
        name: "React-Omb-App",
        description: "Project with react, manipulate the DOM react-dom. Principal particularity is use of the webpack for configure the project, learning principal topics againt the famous create-react-app",
        image: "react-omb-app.jpg",
        url: "https://geiver12.github.io/react-omb-app/"
    },
    {
        name: "Game Couples React",
        description: "Basic game in react.js with dependencys how react-card,lodash and integration: font-awesome ",
        image: "game-couples-react.png",
        url: "https://geiver12.github.io/game-couples-react/"
    },
    {
        name: "Ecommerce Organic Store",
        description: "Website Ecommerce with Node, Handlebars,Express,nodemon,mongoose, bootstrap and other techs. Config Webpack and others.",
        image: "ecommerce-node.png",
        url: "https://boiling-ocean-48623.herokuapp.com/"
    },
    {
        name: "Tech News",
        description: "Website created with html+css+js and other tools how bootstrap + animations +font-awesome+ScrollReveall",
        image: "technews.png",
        url: "https://geiver12.github.io/technews/"
    },
    {
        name: "Whack-a-Mole",
        description: "Learn to make a simple grid-based game using HTML, CSS and JavaScript. The idea of whack-a-mole is simple! The player needs to hit the grid with the mole in as many times as possible until the time runs out.",
        image: "whack-a-mole.png",
        url: "https://geiver12.github.io/whack-a-mole-master/"
    },
    {
        name: "Notes App",
        description: "Aplicattion released in node.js with server,  the app can loggin, connect to database mongoose, process a session with passport, and others...",
        image: "notes-app.png",
        url: "https://thawing-dawn-43050.herokuapp.com/"
    },
    {
        name: "Hackers Particles",
        description: "this project have javascript,css+html, then we used un framework of name particles.js, interting project",
        image: "hackers-particles.png",
        url: "https://geiver12.github.io/Hackers-Particles.js/"
    },
    {
        name: "ReactPixabay",
        description: "Project width react.js,boopstrap+html+css+js the api Pixabay is consumed,transform data with react-create-app",
        image: "reactpixabay.png",
        url: "https://geiver12.github.io/reactpixabay/"
    },
    {
        name: "Snake",
        description: "the classic game of snake, in the floor , the snake seek and eat your food, while eat his body grows",
        image: "snake.png",
        url: "https://geiver12.github.io/snake-classic/"
    },
    {
        name: "Store-Online-Ecommerce",
        description: "Project beautiful width html,css,js+boopstrap+font-awesome+ others... Please the site load files en other sites, wait, load the site.",
        image: "store-online.png",
        url: "https://geiver12.github.io/Store-Online-E-Commerce/"
    },
    {
        name: "Memory Game",
        description: "Page for the classic game 'Couples of Memory', I use html5+css+js , display:flex and other lines of code interesting.",
        image: "memory-game.png",
        url: "https://geiver12.github.io/memory-game-master/"
    },
    {
        name: "Maze Runner Game",
        description: "Basic aplicattion in js+html+css,tecnicals of integration html in js within frameworks utils",
        image: "maze-runner.png",
        url: "https://geiver12.github.io/Maze-Runner/"
    },
    {
        name: "Css Model Content",
        description: "Version minimalist with css. but beautiful view.",
        image: "css-content-model.png",
        url: "https://geiver12.github.io/Css-Content-Model/"
    },

    {
        name: "Css-Learning-Grid",
        description: "project basic with the search, learning css-grid, no is special but is css grid, how work!",
        image: "Css-Learning-Grid.png",
        url: "https://geiver12.github.io/Css-Learning-Grid/"
    },
    {
        name: "Css-Image-Preset",
        description: "Example basic with css+html",
        image: "css-img-present.png",
        url: "https://geiver12.github.io/Css-Image-Present/"
    },
    {
        name: "Connect-four-master",
        description: "Example classic game, connect 4 game with html+css+js",
        image: "connect-four-master.png",
        url: "https://geiver12.github.io/connect-four-master/"
    },
    {
        name: "Css-proccess-image",
        description: "Learning center images and center in squares with html+css",
        image: "css-proccess-img.png",
        url: "https://geiver12.github.io/Css-Process-Images/"
    },
    {
        name: "Css-Gallery",
        description: "Beautiful and minimalist gallery width alone styles of css+responisve.",
        image: "css-gallery.png",
        url: "https://geiver12.github.io/Css-Gallery/"
    },
    {
        name: "Responsive Image Grid",
        description: "Other practice about css, consume una api for capture images extern in other site. Html+css",
        image: "css-flexbox.png",
        url: "https://geiver12.github.io/Css-Flexbox/"
    },
    {
        name: "Css-Grid",
        description: "Exploit the properties of css-grid for your projects. Html+css ",
        image: "css-grid.png",
        url: "https://geiver12.github.io/Css-Grid/"
    },
    {
        name: "Super Menu Amazon",
        description: "Personal version about Menu Amazon, Thank you to FalconMaster for the explain do it ",
        image: "css-menu-amazon.png",
        url: "https://geiver12.github.io/Css-Super-Menu-Amazon/"
    },
    {
        name: "Example Fast Designer with Layous",
        description: "Paper of introduction in css grid, releases and consume the api unsplash",
        image: "grid-layout.png",
        url: "https://geiver12.github.io/css-grid-layout/#"
    },
    {
        name: "Tooltips",
        description: "Short Project about Toltip+ i used js and effects for moving the toltip+ html+css+js",
        image: "tooltip.png",
        url: "https://geiver12.github.io/Toltip-Advance/"
    },

    {
        name: "Aside Fixed int html+css",
        description: "Example basic with aside fixed in html",
        image: "aside_fixed.png",
        url: "https://geiver12.github.io/CSS/aside_fixed.html#"
    },
    {
        name: "website basic",
        description: "Project Released with html+css, practice very short",
        image: "website-css.png",
        url: "https://geiver12.github.io/Website-CSS/"
    },
    {
        name: "Css-text-Effects",
        description: "Amazing effects with css3, border and other properties",
        image: "css-effects.png",
        url: "https://geiver12.github.io/Css-Text-Effects/"
    },
    {
        name: "Css-animations-interesting",
        description: "Other styles about css+html+ playing with style font",
        image: "css-interesting.png",
        url: "https://geiver12.github.io/Css-Interesting/"
    },
    {
        name: "Mini Red Social",
        description: `
        bcryptjs
        connect-flash
        errorhandler
        express
        express-handlebars
        express-session
        fs-extra
        md5
        method-override
        moment
        mongoose
        morgan
        multer
        passport
        passport-local
        timeago.js
        uuid
        `,
        image: "red-social.png",
        url: "https://intense-forest-13327.herokuapp.com/"
    },
    {
        name: "Css-Not-responsive",
        description: "Beautiful present of document html+css",
        image: "css-no-responsive.png",
        url: "https://geiver12.github.io/Css-NoResponsive-Effects/"
    },
   
    {
        name: "Effects Css-Sass EDteam",
        description: "Amazing styles, tnx for EdTeam for released in youtube the video about styles css4,5,6, the ultimate inovation the css+sass",
        image: "style-edteam.png",
        url: "https://geiver12.github.io/Css-Effects-EDTeam/"
    },
    {
        name: "First Web in html",
        description: "First web online with html+css + diferents position in css: static,sicky,fixed and relative+ box model+ images in format .gif and .jpg",
        image: "first-html.png",
        url: "https://geiver12.github.io/first-web/"
    },
    {
        name: "First Web in Angular",
        description: "First Web in the framework Angular, components,html,css,router,typescript, + other tools for development in this framework",
        image: "angular-first.png",
        url: "https://geiver12.github.io/angular-first-aplicattion/"
    },
  
    {
        name: "Finterest",
        description: "Aplicattion released in node.js with server,  the app can save images with multer, connect to database mongoose, unfortunely, heroku for save data, clean the images with size high.",
        image: "finterest.png",
        url: "https://young-earth-70579.herokuapp.com/"
    },

]

const posts = [
    {
        title: "Sql and NoSql",
        content:
            "Practical Database Course for Beginners : 6 courses in 1",
        imageURL:
            "certs/database.jpg",
    },
    {
        title: "Git Basics",
        content:
            "Git from Basics to Advanced: Practical Guide for Developers ",
        imageURL:
            "certs/git.jpg",
    },

];
module.exports = { skills, experiences, projects, posts };
