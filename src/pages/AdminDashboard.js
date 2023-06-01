
import NavigationAdmin from '../components/NavigationAdmin';
import Dashboard from './Dashboard';
import '../styles/style.css';

const AdminDashboard = () => {
  return (
    <div className='d-flex bg'>
      <div>
        <NavigationAdmin/>
      </div>
      <Dashboard/>
    </div>
  )
}

export default AdminDashboard;
