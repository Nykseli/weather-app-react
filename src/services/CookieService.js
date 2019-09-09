import Cookies from 'universal-cookie';


/**
 *
 * @param {string} name
 * @param {string} value
 */
const setCookie = (name, value) => {
    const cookies = new Cookies();
    cookies.set(name, value, { path: '/' });
}

export default { setCookie }
