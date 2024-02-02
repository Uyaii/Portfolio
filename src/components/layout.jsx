import { Outlet } from 'react-router-dom'
import '../scss/layout.scss'
import SideBar from './sideBar'



export const Layout = () => {
  return (
    <main>
      <SideBar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet />

        
        <span className='tags bottom-tags'>
          &lt;body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </main>
  );
}