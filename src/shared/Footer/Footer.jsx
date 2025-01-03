import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-between border-4 p-5 rounded-3xl bg-gray-400">
            <div className="flex gap-2 font-bold text-2xl text-stone-100">
                <p><Link>Twitter</Link></p>
                <p><Link>Facebook</Link></p>
                <p><Link>Instagram</Link></p>
            </div>
            <div className="font-bold text-lg text-stone-100"> <p>Copyright © {new Date().getFullYear()} - All right reserved by Ruhul Amin</p></div>
        </div>
    );
};

export default Footer;