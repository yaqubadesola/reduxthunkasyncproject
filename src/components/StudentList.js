  
import {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import MUIDataTable from "mui-datatables";
import { CircularProgress, Alert, AlertTitle, Snackbar } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddButton from "./AddButton";
import {getAllStudentsRec} from "../asyncActions"
// import AddStudent from "./AddStudents";
// import api from '../api/students';


function StudentList() {
  const data = useSelector(state => state.students)
  const dispatch = useDispatch()
// const [isLoading, setIsLoading] = useState(false);
// const [data, setData] = useState([])
// const [error, setError] = useState(null);
// const [open, setOpen] = useState(false);
// const [showSuccessAlert, setShowSuccessAlert] = useState(false)
// const [showFailureAlert, setShowFailureAlert] = useState(false)
// const [stdId, setStudId] = useState(null)
  
// const handleClickOpen = () => {
//   setStudId(null)
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
// };



// const handleSuccessAlertClose = () => {
//     setShowSuccessAlert(false)
// }

// const openEditDialog = (id) => {
//     setOpen(true);
//     setStudId(id)
// }

// const deleteRec = (id) => {
//   deleteData(id)
// }

// const handleFailureAlertClose = () => {
//     setShowFailureAlert(false)
// }

// const getData = async() => {
//    try {
//     setIsLoading(true)
//      const response = await api.get("students");
//      if(response){
//        setData(response.data)
//      }
//    } catch (error) {
//     console.log("Students Error ", error)
//     setError(error.message)
//    } finally{
//     setIsLoading(false)  
//    }
// }

// const deleteData = async(id) => {
//   try {
//    const confirmAlert  = window.confirm("Do you want to delete "+ id)
//    if(confirmAlert){
//     setIsLoading(true)
//     const response = await api.delete("/students/"+id);
//     if(response){
//       console.log("Delete Res = ",response.data)
//     }
//    }
   
//   } catch (error) {
//    console.log("Students Error ", error)
//    setError(error.message)
//   } finally{
//    setIsLoading(false)  
//   }
// }



useEffect(() => {
  dispatch(getAllStudentsRec())
  //console.log("Students Data ", data)
}, [])

const columns = [
    {
      name: "name",
      label: "Name",
      options: {
      filter: true,
      sort: true,
      }
    },
    {
      name: "username",
      label: "Username",
      options: {
      filter: true,
      sort: false,
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
      filter: true,
      sort: false,
      }
    },
    {
      name: "phone",
      label: "Phone",
      options: {
      filter: true,
      sort: false,
      }
    },
    {
      name: "website",
      label: "Website",
      options: {
      filter: true,
      sort: false,
      }
    },
    // {
    //     name: "id",
    //     label: "Actions",
    //     options: {
    //         customBodyRender: id => {          
    //           console.log("ID id "+id)      
    //             return (
    //                 <Stack direction="row" spacing={1}>
    //                     <IconButton aria-label="add" color="primary" onClick={() => openEditDialog(id)}>
    //                         <ModeEditIcon />
    //                     </IconButton>
    //                     <IconButton aria-label="delete" color="error" onClick={() => deleteRec(id)}>
    //                         <DeleteIcon/>
    //                     </IconButton>
    //                 </Stack>
    //             );
                    
    //         }
    //     }

    // },
];

const options = {
  filterType: 'checkbox',
  customToolbar: () => {
    return <AddButton />;
  },
};
  return (
    <>
      {console.log("Stud data ", data)}
      <h1>MUI DATA TABLE DISPLAY</h1>
      {data.isLoading && <CircularProgress/>}
      {data.length > 1 ? 
      <MUIDataTable
          title={"Students List"}
          data={data}
          columns={columns}
          options={options}
        />:""}
    </>
  );
}

export default StudentList;
