const Footer = () => {
    return (
        <footer className="w-full bg-red-600 text-center text-xs md:text-sm py-1 text-white">
            <div>
                <p>
                    &copy; {new Date().getFullYear()} <span>NetflixGPT | Personal Project</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;