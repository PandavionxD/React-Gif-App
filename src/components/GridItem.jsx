
export const GifItemGrid = ({title,url})=>{
    return (
        <div className="card">
            <img src={url} alt={title} />
        </div>
    )
}