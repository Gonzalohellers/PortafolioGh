import axios from 'axios';

let url="http://localhost:6060/materias";

function getAll(){
    return axios.get(url)
  }

function borrar(id){
  axios.delete(id);
}

export default {
  getAll:getAll,
  borrar:borrar
}