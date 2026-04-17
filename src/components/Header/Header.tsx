import { useContext, useState } from 'react';
import Topbar from '../Topbar/Topbar'
import './Header.css'
import { CiDeliveryTruck, CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import NavActionButton from '../Button/NavActionButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../context/useAuth';



export default function Header() {
    const { logout } = useAuth();
    const [searchVal, setSearchVal] = useState("");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const auth = useContext(AuthContext);

    const username = auth?.username;

    const navActionBtn = [{
        href: "#",
        Icon: CiUser,
        label: `Hi, ${username || "User"}`,
        className: "account",
        onClick: () => {
            if (!username) {
                setIsDrawerOpen(true)
            } else {
                setShowMenu(true);
            }
        },
    },
    {
        href: "#",
        Icon: CiDeliveryTruck,
        // label: "order tracking",
        className: "order_tracking",
    },
    {
        href: "#",
        Icon: CiHeart,
        // label: "Wishlist",
        className: "wishlist",
    },
    {
        href: "#",
        Icon: CiShoppingCart,
        // label: "Cart",
        className: "cart",
    }]

    const handleLogout = () => {
        logout();
        setShowMenu(false);// close drawer
    };
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
                        {showMenu && username && (
                            <div className="dropdown-menu">
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav >
            <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    )
}

