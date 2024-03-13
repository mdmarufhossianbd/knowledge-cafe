import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-12 mx-48 border-b-2 border-gray-600'>
            <h1 className='text-3xl'>Kowlede Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;