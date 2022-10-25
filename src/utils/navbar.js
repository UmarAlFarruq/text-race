import Generic from '../components/Generic/index';
import Home from '../components/Home/home';

export const navbar = [
    { id: 1, title: 'Home', path: '/home', Elements: Home, hidden: false },
    { id: 2, title: 'Shop', path: '/shop', Elements: Generic, hidden: false },
    { id: 3, title: 'Plant Care', path: '/plantcare', Elements: Generic, hidden: false },
    { id: 4, title: 'Blogs', path: '/blogs', Elements: Generic, hidden: false },
]