const backendUrl = process.env.REACT_APP_BACKEND_URL || "localhost:8080"

exports.backendUrl = backendUrl
exports.loginUrl = `${backendUrl}/api/login`

