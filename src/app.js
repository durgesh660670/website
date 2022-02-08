const express = require('express')
const app = express()
const routes1 = require('./routes/main')
const routes2 = require('./routes/login')
const routes3 = require('./routes/admin_user/detailsMaster')
const hbs = require('hbs');
const mongoose = require('mongoose')
const Details = require('./models/Details')
const Slider = require('./models/Slider')
const Services = require('./models/Services')
const bodyParser = require('body-parser')




//body parser start

app.use(bodyParser.urlencoded({
    extended: true
}))
//body parser end

app.use('', routes1)
app.use('', routes2)
app.use('/admin_user',routes3)


// template engine start

app.set('view engine', 'hbs')

app.set('views', 'views')

// template engine end

//static file server configutaion start

app.use('/static', express.static('public'))
//static file serve configuration end

//db connectin start

mongoose.connect('mongodb://localhost/website', () => {

    console.log('datbase connected')

    // Details.create({
    //     brandName:'Durgesh kumar gupta',
    //     links:[
    //         {
    //             label:"Home",
    //             url:'/'
    //         },
    //         {
    //             label:"Services",
    //             url:'/services'
    //         },
    //         {
    //             label:"Gallery",
    //             url:'/gallery'
    //         },
    //         {
    //             label:"About",
    //             url:'/about'
    //         },
    //         {
    //             label:"Contact Us",
    //             url:'/contact-us'
    //         }
    //     ]
    // })

    // Slider.create([
    //     {
    //         title: 'First slide label',
    //         subTitle: 'Some representative placeholder content for the first slide.',
    //         imgUrl: '/static/img/s1.jpg'
    //     },
    //     {
    //         title: 'Second slide label',
    //         subTitle: 'Some representative placeholder content for the first slide.',
    //         imgUrl: '/static/img/s2.jpg'
    //     },
    //     {
    //         title: 'Third slide label',
    //         subTitle: 'Some representative placeholder content for the first slide.',
    //         imgUrl: '/static/img/s3.jpg'
    //     }
    // ],

    // ).then((result)=>console.log(result))

    // Services.create([
    //     {

    //         icon: 'fab fa-accusoft',
    //         title: 'Provide best cources',
    //         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis neque error illum omnis dolor,
    //    nobis possimus modi. Natus nihil temporibus ut voluptatibus, repudiandae sint assumenda delectus quis,
    //    inventore, corporis dolorem`,
    //         linkText: 'Check',
    //         link: 'google.com'
    //     },
    //     {

    //         icon: 'fab fa-affiliatetheme',
    //         title: 'Learn projects',
    //         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis neque error illum omnis dolor,
    //    nobis possimus modi. Natus nihil temporibus ut voluptatibus, repudiandae sint assumenda delectus quis,
    //    inventore, corporis dolorem`,
    //         linkText: 'Check',
    //         link: 'google.com'
    //     },
    //     {

    //         icon: 'fab fa-affiliatetheme',
    //         title: 'Learn projects',
    //         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis neque error illum omnis dolor,
    //    nobis possimus modi. Natus nihil temporibus ut voluptatibus, repudiandae sint assumenda delectus quis,
    //    inventore, corporis dolorem`,
    //         linkText: 'Check',
    //         link: 'google.com'
    //     },
    // ])





})
//db connectin end

//partials configuration start

hbs.registerPartials('views/partials')

//partials configuration end




app.listen(process.env.PORT | 4000, () => {

    console.log('server started...')
})

