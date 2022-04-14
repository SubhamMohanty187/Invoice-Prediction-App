import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


export function UseForm(initialValues) {


    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange= e=> {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const cancelForm= ()=> {
      setValues(initialValues);
      setErrors({})
    }


  return{
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      cancelForm
  }
  
}

const useStyles = makeStyles(theme => ({
    root: {
            width:'100%',
            margin: useTheme().spacing(1)
    }
}))

export function Form(props) {
    const classes = useStyles();
    const {children, ...other} = props;
  return (
    <form className={classes.root} {...other}>
        {props.children}

    </form>
  )
}
