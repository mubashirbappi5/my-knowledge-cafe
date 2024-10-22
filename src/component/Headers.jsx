import profile from '../assets/images/profile.png'

const Headers = () => {
    return (
        <header className="flex justify-between items-center w-11/12 py-4  mx-auto border-b-2">
            <h1 className="font-bold text-3xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </header>
    );
};

export default Headers;