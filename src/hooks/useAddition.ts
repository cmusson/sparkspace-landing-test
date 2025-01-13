import { useState, useEffect } from "react";

export const useAddition = (start:number, maxPercentage: number, step: number = 50) => {
 const [currentPercentage, setCurrentText] = useState(start);
 
     
       useEffect(() => {
       if (currentPercentage < maxPercentage) {
         const timeout = setTimeout(() => {
           setCurrentText(prevPercentage => prevPercentage + step);
 
         }, 50);
     
         return () => clearTimeout(timeout);
       }
     }, [currentPercentage, maxPercentage, step]);
     
     return currentPercentage
};
