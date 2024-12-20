import classes from "./badge-board.module.css"
import Image from "next/image"
import Rating from "./feber/rating"

interface BadgeBoardProps {
    className: string
}


export default function BadgeBoard({ className }: BadgeBoardProps) {
    return (
        <div className={`${classes["badges-container"]} ${className}`}>
            <div>
                <Image alt="Trustly" width={13} height={13} src="/images/badges/trustly.avif" />
                <span>Trustly</span>
            </div>
            <div>
                <Image alt="swish" width={13} height={13} src="/images/badges/swish.avif"/>
                <span> Swish</span>
            </div>
            <div>
                <Image alt="BankID" width={13} height={13} src="/images/badges/bankid.avif"/>
                <span>BankID</span>
            </div>
            <div>
                <Image alt="Spelinspektionen" width={13} height={13} src="/images/badges/spelinspektionen.avif"/>
                <span>Licens</span>
            </div>
        </div>
    )
}