import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
        "& .MuiOutlinedInput-input": {
            color: "black"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "black"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black"
        },
        "& .MuiInputLabel-outlined": {
            color: "black"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "red"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "red"
        }
    }
});

export { useStyles };