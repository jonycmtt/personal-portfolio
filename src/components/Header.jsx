

const Header = () => {
    return (
        <header className='py-8'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="javascript:void">
                        <h2 className="text-2xl font-bold">JonyCmT</h2>
                    </a>
                   <a href="../assets/SalmanRahamanResume.pdf" download>
                   <button  className="btn-ex btn-sm">Download CV</button>
                   </a>
                </div>
            </div>
        </header>
    );
};

export default Header;