import React, { useEffect } from 'react';
const LifecycleComponent = () => {
   
    useEffect(() => {
        console.log('Component is mounted');
       
        return () => {
            console.log('Component will unmount');
        };
    }, []); 
    useEffect(() => {
        console.log('Component is updated');
        
    });
    return <div>Component Lifecycle Example</div>;
};
export default LifecycleComponent;