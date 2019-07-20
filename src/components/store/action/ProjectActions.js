export const createProject = (project) => {
   return (dispatch,getState,{getFirebase,getFirestore}) => {
       // make async call to the database
       console.log(getFirestore);
       const firestore = getFirestore();
       firestore.collection('projects').add({
           ...project,
           authorFirstName: 'harsha',
           authorLastName: 'pericherla',
           createdAt: new Date()
       }).then( () => {
           dispatch({type:'CREATE_PROJECT',project:project});
       }).catch((err) => {
           dispatch({type:'CREATE_PROJECT_ERROR',err});
       });
   }
}