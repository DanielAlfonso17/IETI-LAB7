const tasks= [
  {
    "id":"0",
    "descripcion": "Realizar la implementacion",
    "responsable": {
        "name": "Daniel Alfonso",
        "email": "danielalfonso@gmail.com"
    },
    "estado": "listo",
    "fecha": new Date(2020,10,9).toString()
  },{
    "id":"1",
    "descripcion": "Realizar modelos",
    "responsable": {
        "name": "Daniel Alfonso",
        "email": "danielalfonso@gmail.com"
    },
    "estado": "falta",
    "fecha": new Date(2020,10,9).toString()
  }
]

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response
    if(req.method == 'GET'){
      const responseMessage = { response: tasks};
      context.res = {
          status: 201,
          body: responseMessage
      }
    }else if(req.method == 'POST'){
      tasks.push(task);
      const responseMessage = { response: tasks }
      context.res = {
          status: 201,
          body: responseMessage
      }
    }



}
