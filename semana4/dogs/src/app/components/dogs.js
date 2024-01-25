"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./dogs.module.css";

function Dog(){ 
    const [dog ,setDog] =useState("/vercel.svg")

    const url = "https://dog.ceo/api/breed/Toy Poodle/images/random"
    useEffect(()=> { 
        fetch(url)
            .then(res=>res.json())
            .then(data=>
                {setDog(data.message)})
    }, [])
    return(
        <div className={style.box}> 
            <h1>Dogs</h1>
            <Image src={dog} alt="dog" widht={500} height={500} />
        </div>
    );
}

export default Dog;