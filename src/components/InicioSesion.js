import React from 'react'

const InicioSesion = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>InicioSesion</div>
  )
}

export default InicioSesion