App.getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = App.users.find(user => user.id === id)
    cb(user)
  }, 150)
}