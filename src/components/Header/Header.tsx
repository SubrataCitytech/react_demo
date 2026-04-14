import { useState } from 'react';
import Topbar from '../Topbar/Topbar'
import './Header.css'
import { VscAccount } from 'react-icons/vsc';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import NavActionButton from '../Button/NavActionButton';

const navActionBtn = [{
    href: "#",
    Icon: VscAccount,
    label: "Account",
},
{
    href: "#",
    Icon: CiHeart,
    label: "Wishlist",
},
{
    href: "#",
    Icon: CiShoppingCart,
    label: "Cart",
}]

export default function Header() {
    const [searchVal, setSearchVal] = useState("");
    return (
        <>
            <Topbar />
            <nav className="navbar">
                <div className="navbar-inner">
                    <div className="nav-logo">eCommerce</div>
                    <div className="nav-search">
                        <input
                            value={searchVal}
                            onChange={e => {
                                setSearchVal(e.target.value)
                                console.log(e.target.value);
                            }}
                            placeholder="Search for appliances, brands..."
                        />
                        <button>🔍</button>
                    </div>
                    <div className="nav-actions">
                        {
                            navActionBtn.map((item, index) => (
                                <NavActionButton key={index} href={item.href} Icon={item.Icon} >

                                    {item.label}
                                </NavActionButton>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
