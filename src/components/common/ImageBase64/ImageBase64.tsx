import { ImgHTMLAttributes } from "react"
import thumbDefault from '../../../assets/thumb-default.jpg'

interface IImageBase64 extends ImgHTMLAttributes<HTMLOrSVGImageElement> {}

export function ImageBase64({ src, onError, ...rest }: IImageBase64){
    return(
        <img
            {...rest}
            src={`data:Image/*;base64,${src}`}
            onError={(e) => {
                onError && onError(e) 
                e.currentTarget.src = thumbDefault
            }}
        />
    )
}