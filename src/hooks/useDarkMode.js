import {useLocalStorage} from './useLocalStorage';

export const useDarkMode=(isDarkMode)=>{
    const [value, setValue] = useLocalStorage('isDarkMode',isDarkMode);
    return [value, setValue];
}