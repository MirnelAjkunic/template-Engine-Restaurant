const express = require('express');
const router = express.Router()





router.get('/' , (req,res) => {
    res.render('index')
})
router.get('/team' , (req,res) => {
    res.render('team')
})
router.get('/booking' , (req,res) => {
    res.render('booking')
})
router.get('/galerie' , (req,res) => {
    res.render('galerie')
})
router.get('/menu' , (req,res) => {
    res.render('menu')
})
router.get('/events' , (req,res) => {
    res.render('events')
})
router.get('/contact' , (req,res) => {
    res.render('contact')
})

module.exports = router