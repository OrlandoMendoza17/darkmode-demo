export const saveDarkMode = (mode) =>{
  localStorage.setItem('darkmode', mode)
}
export const getDarkMode = () =>{
  return localStorage.getItem('darkmode')
}