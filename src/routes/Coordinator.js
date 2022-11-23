export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToProfilePage = (navigate, name) => {
    navigate(`/profile/${name}`)
}

export const goToProductPage = (navigate) => {
    navigate(`/product`)
}
