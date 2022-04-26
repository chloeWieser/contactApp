import {v1 as uuidv4} from 'uuid';

const contacts = [
    {
        id: uuidv4(),   //id added bc we need a unique identifier for delete/editing/user interaction
        name: "Alex Gagnon",
        number: "765-491-8271",
        email: "gagnon.alexandra@gmail.com",
        address: "1340 Elmhurst Circle SE",
        city: "Atlanta",
        state: "GA",
        zip: "30316",
    },
    {
        id: uuidv4(),   
        name: "Nikki Maxwell",
        number: "703-798-5101",
        email: "tnmaxwell@msn.com",
        address: "513 Parker Avenue",
        city: "Decatur",
        state: "GA",
        zip: "30032",
    },
    {
        id: uuidv4(),   
        name: "Ann Milner",
        number: "703-798-5101",
        email: "amcouture4@gmail.com",
        address: "2146 Shale Lave Nw",
        city: "Atlanta",
        state: "GA",
        zip: "30018",
    },
]

export default contacts;