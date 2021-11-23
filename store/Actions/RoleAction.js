import axios from "../../axios/axios";

export function getRoles(){
    return (dispatch) => {
        axios({
            method:"get",
            url: "/internal/api/admin/roles",
        })
        .then(({data}) => {
            dispatch({
                type: "ADD_ROLES",
                payload: data
              })
        })
        .catch(err => {
            console.log(err.response)
        })
    }
}