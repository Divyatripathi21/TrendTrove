import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  // console.log(theme);
  
  return (
    <div className={theme}>
     
        {children}
      
    </div>
  );
}