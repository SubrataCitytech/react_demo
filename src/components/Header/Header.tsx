import { useState } from 'react';
import Topbar from '../Topbar/Topbar'
import './Header.css'
import { VscAccount } from 'react-icons/vsc';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';
import NavActionButton from '../Button/NavActionButton';
import SideDrawer from '../SideDrawer/SideDrawer';



export default function Header() {
    const [searchVal, setSearchVal] = useState("");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navActionBtn = [{
        href: "#",
        Icon: VscAccount,
        label: "Account",
        className: "account",
        onClick: () => setIsDrawerOpen(true),
    },
    {
        href: "#",
        Icon: CiHeart,
        label: "Wishlist",
        className: "wishlist",
    },
    {
        href: "#",
        Icon: CiShoppingCart,
        label: "Cart",
        className: "cart",
    }]
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
                            placeholder="Search here..."
                        />
                        <button>
                            <CiSearch />
                        </button>
                    </div>
                    <div className="nav-actions">
                        {
                            navActionBtn.map((item, index) => (
                                <NavActionButton key={index} href={item.href} Icon={item.Icon} className={item.className}
                                    // onClick={
                                    //     item.label === "Account"
                                    //         ? () => setIsDrawerOpen(true)
                                    //         : undefined
                                    // }
                                    onClick={item.onClick}
                                >
                                    {item.label}
                                </NavActionButton>
                            ))
                        }
                    </div>
                </div>
            </nav >
            <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    )
}

