import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/' className='bg-red-500'>
            oi
          </Link>
        </li>
        <li>
          <Link href='/jokenpo'>Jokenpo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
