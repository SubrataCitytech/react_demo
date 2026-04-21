import LinkIconButton from '../Button/LinkIconButton'
import './Topbar.css'
import { TbWorld } from 'react-icons/tb'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { MdOutlineEngineering, MdOutlinePayment } from 'react-icons/md'

const topLinkButtonData = [
    {
        href: "#",
        Icon: TbWorld,
        label: "AR | EN",
    },
    {
        href: "#",
        Icon: MdOutlineEngineering,
        label: "Free Installation Services",
    },
    {
        href: "#",
        Icon: RiSecurePaymentFill,
        label: "5+5 Years Warranty*",
    },
    {
        href: "#",
        Icon: MdOutlinePayment,
        label: "Finance available",
    },
];

const Topbar = () => {
    return (
        <div className="topbar" >
            <div className="topbar-links d-flex justify-content-between">
                {
                    topLinkButtonData.map((item, index) => (
                        <LinkIconButton key={index} href={item.href} Icon={item.Icon}>
                            {item.label}
                        </LinkIconButton>
                    ))
                }
            </div>
        </div >
    )
}
export default Topbar;