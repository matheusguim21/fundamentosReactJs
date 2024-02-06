
type Props = {
  author:string;
  content:string

}

export function Post({author, content }:Props){
  return(
  <div>
    <strong>{author}</strong>
    <p>{content}</p>

  </div>
  )
}