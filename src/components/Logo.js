export function Logo(props){
  if (props.type === "no-text"){
    return(
      <img src="favicon.ico" alt="logo" width={props.scale}></img>
    )
  }
  else {
    return(
      <img src="logo.png" alt="logo" width={props.scale}></img>
    );
  }
}