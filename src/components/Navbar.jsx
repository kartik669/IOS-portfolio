import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'


const Navbar = () => {

  const { openWindow } = useWindowStore()

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className='font-bold'>Kartik PortFolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li className='hover:text-white cursor-pointer' key={id} onClick={()=>openWindow(type)}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {
            navIcons.map(({ id, img }) => (
              <li className='cursor-pointer' key={id}>
                <img src={img} className='icon-hover' alt={`icon-${id}`} />
              </li>
            ))
          }
        </ul>

       <time dateTime={dayjs().toISOString()}>
  {dayjs().format('ddd MMM D h:mm A')}
</time>
      </div>

    </nav>
  )
}

export default Navbar
