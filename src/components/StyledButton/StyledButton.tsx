import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme }) => ({
      backgroundColor: "transparent",
      border:`1px solid ${theme.palette.primary.main}`,
      borderRadius:"1px",
      padding:"3px 5px",
      width:"100%",
      color: theme.palette.secondary.contrastText,
      display:"inline-flex",
      alignItems:"center",
      justifyContent:"center",
      gap:"13px",
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      },

}))

    return (
      <>
      <StyledButton>
        {children}
      </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  
