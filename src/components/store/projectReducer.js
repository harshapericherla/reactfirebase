
const initState = {
    projects:[
        {id:'1',title:"some",content:'blac'},
        {id:'2',title:"some1",content:'blac'}
    ]
};

const projectReducer = (state = initState,action)  => {
   switch(action.type)
   {
      case 'CREATE_PROJECT':
           console.log(action.project);
   }
   return state;
}

export default projectReducer;