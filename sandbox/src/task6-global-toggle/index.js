/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {

    const isActive = className.endsWith('_active');
    
  
    const newClass = isActive ? className.replace('_active', '') : className + '_active';

    const elements = document.querySelectorAll(`.${className}, .${newClass}`);

    if (elements.length === 0) return;

    elements.forEach(element => {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
            element.classList.add(newClass);
        } else if (element.classList.contains(newClass)) {
            element.classList.remove(newClass);
            element.classList.add(className);
        }
    });
};
