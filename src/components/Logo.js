export function Logo(props){
  if (props.type === "no-text"){
    return(
      <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="logo" width={props.scale}></img>
    )
  }
  else {
    return(
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width={props.scale}></img>
    );
  }
}