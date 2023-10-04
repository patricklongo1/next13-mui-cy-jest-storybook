/**
 * envia o "form"
 * @function
 * @param value a string that represents the button id.
 * @returns void.
 */
const handleSubmit = (value: string) => {
  console.log('Logar isso quando o usuári clicar', value)
}

/**
 * cancela a ação
 * @function
 * @returns void.
 */
const handleCancel = () => {
  console.log('cancela')
}

export { handleSubmit, handleCancel }
