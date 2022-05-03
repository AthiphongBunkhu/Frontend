export default (to, from, next) => {
  const dataUser = JSON.parse(localStorage.getItem('dataUser'))

  if (dataUser) {
    next()
  } else {
    next({ name: 'Home' })
  }
}