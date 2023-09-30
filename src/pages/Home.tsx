import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import DayContent from './Day';
import NightContent from './Night';
import '../styles/DayNightMode.css';
import { useTheme } from '../ThemeContext';

const HomePage: React.FC = () => {
  // const [isDay, setIsDay] = useState(true);

  // const toggleDayNight = () => {
  //   setIsDay(!isDay);
  // };

  const { isDay, toggleDayNight } = useTheme();

  // const modeClass = isDay ? 'day-mode' : 'night-mode';

  return (
    <div>
      <header>
        <button onClick={toggleDayNight}>
          {isDay ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </header>
      
      {isDay ? <DayContent /> : <NightContent />}
      <footer style={{ textAlign: 'center', padding: '5em'}}>
      This site is under development. Come back by November to see an awesome portfolio!
    </footer>
    </div>

  );
};

export default HomePage;