App.getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = window.App.users.find(user => user.id === id)
    cb(user)
  }, 150)
}