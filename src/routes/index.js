const express = require('express');
const router = express.Router();
var path = require('path');
let app = express();
const Task = require('../models/task');
const Calendario = require('../models/calendario');


router.use(express.json());

router.get('/', async (req, res) =>{
     const tasks = await Task.find();
     
    res.render('index', {
        tasks // tasks:tasks
    });
});
// links internos
router.get('/pacientes', async (req, res) =>{
    const tasks = await Task.find();
    
   res.render('pacientes', {
       tasks // tasks:tasks
   });
});



router.get('/add', async (req, res) =>{
    const tasks = await Task.find();
    
   res.render('add', {
       tasks // tasks:tasks
   });
});


router.get('/calendario', async (req, res) =>{
    const tasks = await Calendario.find();
    
   res.render('calendario', {
       tasks // tasks:tasks
   });
});

router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
   
    //redireccionar a la ruta inicial
    res.redirect('/');
})

router.post('/calendario', async (req, res) => {
    const cale = new Calendario(req.body);
    await cale.save();
   
    //redireccionar a la ruta inicial
    res.redirect('/calendario');
})









router.get('/turn/:id', async (req,res) =>{
    //reciBido el id del navegador
        const {id} = req.params;
        // lo ha buscado, una vez lo encuentra lo almacena en esa constante
       const task =  await Task.findById(id);
       //cambiar el estado de la var
       task.status = !task.status;
       //una vez vcambiado se guarda en la base de datos
        await task.save();
       res.redirect('/');
    });
//:id es un parametro para decir que va a haber un tipo de variable
router.get('/delete/:id', async(req,res) => {
    const {id} = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});
router.get('/edit/:id' , async (req,res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task
    });
});
router.get('/historiacli/:id' , async (req,res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('historiacli', {
        task
    });
});
router.post('/edit/:id' , async (req,res) =>{
    const {id} = req.params;
    //primero va a buscar la tarea con el id determinado y lo reemplaza por uno nuevo
    await Task.update({_id:id}, req.body);
    res.redirect('/');
});


module.exports = router;