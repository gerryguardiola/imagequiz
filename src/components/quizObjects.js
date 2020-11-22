import cherry from './images/cherry.jpg'
import daffodil from './images/daffodil.png'
import lily from './images/lily.jpg'
import cat from './images/cat.jpg'
import mouse from './images/mouse.png'
import bike from './images/bike.jpg'
import cherryblossom from './images/cherryblossom.png'
import rose from './images/rose.png'
import parrot from './images/parrot.jpg'
import bat from './images/bat.jpg'
import rat from './images/rat.jpg'

var quiz = [
    ["cherryblossom.png"],
    ["daffodil.png"],
    [0]
    [0]
]

var cherryQuestions = [
 [bat, parrot,rose, cherryblossom, rat, daffodil]
]
var cherryOptions = [
    [rose, parrot,bat, cherryblossom],
    [bat, cherryblossom, rat, daffodil]
]
var cherryNames = [
    ["rose", "parrot","bat", "cherryblossom"],
    ["bat", "cherryblossom", "rat", "daffodil"]
]
var daffodilQuestions = [
 [cherry, mouse, cat, lily, daffodil, bike]
]
var daffodilOptions = [
    [mouse, cat,cherry, lily],
    [daffodil, rat, cat, bike]
]
var daffodilNames = [
    ["mouse", "cat", "cherry", "lily"],
    ["daffodil", "rat", "cat", "bike"]
]
var flowerDisplay = [
    ["cherryblossom.png","daffodil.png","daisy.jpg","lily.jpg",
    "rose.png","sunflower.png","tulip.png","waterlil.png"]
]
var names = [
    ["cherryblossom","daffodil","daisy","lily",
    "rose","sunflower","tulip","waterlily"]
]

const quizObj = {
    getFlowerDisplay:() =>{
        return flowerDisplay;
    },
    getNames:() =>{
        return names;
    },
    change:(value) => {
        quiz[2] = value;
    },
    returnVal:() => {
        return quiz[2];
    },
    getImage:() => {
        console.log(quiz)
        return quiz[quiz[2]];
    },
    increment:() => {
        quiz[3] = quiz[3]+1;
        console.log(quiz[3])
    },
    getScore:() => {
        var correct = quiz[3];
        var score = correct/6;
        quiz[3] = 0;

        return score;
    },
    getCherryBlossom:() => {
        return cherryQuestions;
    },
    getDaffodil:() => {
        return daffodilQuestions;
    },
    getCherryOptions:(val) => {
        if (val < 4){
            return cherryOptions[0];
        }
        return cherryOptions[1]
    },
    getDaffodilOptions:(val) => {
        if (val < 4){
            return daffodilOptions[0];
        }
        return daffodilOptions[1]
    },
    getDaffodilNames:(val) => {
        if (val < 4){
            return daffodilNames[0];
        }
        return daffodilNames[1]
    },
    getCherryNames:(val) => {
        if (val < 4){
            return cherryNames[0];
        }
        return cherryNames[1]
    }

}

export default quizObj;