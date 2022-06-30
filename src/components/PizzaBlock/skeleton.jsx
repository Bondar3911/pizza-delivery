import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="138" /> 
    <rect x="0" y="286" rx="10" ry="10" width="280" height="20" /> 
    <rect x="0" y="321" rx="10" ry="10" width="280" height="70" /> 
    <rect x="2" y="407" rx="10" ry="10" width="103" height="40" /> 
    <rect x="150" y="407" rx="20" ry="20" width="130" height="40" />
  </ContentLoader>
)

export default Skeleton