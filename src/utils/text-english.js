import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
 
 export const cardTypeClassesIndividual =   
    {
        title: "Online individual classes",
        body: "1 on 1 classes. The teacher will be your personal tutor. You can choose the time and date of your class. Classes are completely personalized. ",
        buttonText: "Check prices and availability",
        key: "1"
    }

export const cardTypeClassesGroup =
    {
        title: "Online group classes for beginners",
        body: "Classes for groups up to 5 students. The classes are organized in the weekend. 2 x 2 hours of classes. The students are divided in groups according to their level.",
        buttonText: "Check prices and availability",
        key: "2"
    }

export const DialogOneButtonIndivual =
    {   
        title: "Individual classes",
        body: "I'm sorry, for the moment there is no availability for individual Dutch classes.",
        buttonText: "Close",
        icon: <AiOutlineUser />,
        key: "3"
    }

    export const DialogTwoButtonsGroup =
    {   
        title: "Group classes",
        body: "There is availability for Dutch classes for beginners (Level 1). Classes start at the 30th of August 2022",
        buttonTextPrimary: "Make your reservation",
        buttonTextSecundary: "Close",
        icon: <AiOutlineTeam />,
        key: "4"
    }

