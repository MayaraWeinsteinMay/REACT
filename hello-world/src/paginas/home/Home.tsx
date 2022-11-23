import React from 'react'
 import './Home.css' 
 
 
 let nome = 'MAYARA WEINSTEIN'  
 let idade = 27
 let curso = 'JavaScript'
 let instituição = 'Generation Brasil'


 function Home(){    
     return(        
         <div className='fundo' >             
            <h1>Informações sobre mim: </h1>             
            <h2>{nome}</h2>            
            <h2>{idade}</h2>  
            <h2>{curso}</h2>  
            <h2>{instituição}</h2>  
            


         
         </div>   
         ) 
    }

    export default Home;



//function Home() {
    //     return(
    //     <body className='fundo1'>
    //         <div >
    //             <nav>
    //                 <ul>
    //                     <li>
    //                         <a>MUNDO DISNEY </a>
    //                     </li>
    //                 </ul>
    //             </nav>
    //         </div>
            
    //     </body>
            
    //     )
    // }
    
    // export default Home;

