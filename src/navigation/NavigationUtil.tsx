
import {createNavigationContainerRef, CommonActions, StackActions} 
from '@react-navigation/native'


export const navigationRef = createNavigationContainerRef();

export async function navigate(routName : string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady ()){
   navigationRef.dispatch(CommonActions.navigate(routName, params))
    }
}

export async function replace(routName : string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady ()){
   navigationRef.dispatch(StackActions.replace(routName, params))
    }
}


export async function resetAndNavigate(routName : string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady ()){
   navigationRef.dispatch(CommonActions.reset({
    index : 0,
    routes : [{name : routName}]
   }))
    }
}



export async function goBack(routName? : string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady ()){
   navigationRef.dispatch(CommonActions.goBack())
    }
}