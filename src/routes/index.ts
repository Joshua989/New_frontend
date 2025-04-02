import { createBrowserRouter, type RouteObject } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout";
import main from "../pages/main";




const routes: RouteObject[] = [
    {
        path: "/",
        Component: DefaultLayout,

        children: [
            {
                index: true,
                Component : main, 
                
        
            },
            
            
            
           

            
        ],
        
    },
    
    
   
    
];

const router = createBrowserRouter(routes);

export default router;
