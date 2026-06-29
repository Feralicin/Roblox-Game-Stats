const params = new URLSearchParams(window.location.search)

const session = params.get("session")

console.log(session)
