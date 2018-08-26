export const checkTheFields = (state) => {
  const { nameErrorMessage, addressErrorMessage, emailErrorMessage, emialIsValid } = state;
  let buttonDisabled = true;
  console.log(nameErrorMessage, addressErrorMessage, emailErrorMessage, emialIsValid)
  if (nameErrorMessage.length === 0 && addressErrorMessage.length === 0 && emailErrorMessage.length === 0 && emialIsValid ){
    buttonDisabled = false
  }
  return  buttonDisabled;
}