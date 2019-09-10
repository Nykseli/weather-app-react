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

/**
 *
 * @param {string} name
 * @return {string}
 */
const getCookie = (name) => {
    const cookies = new Cookies();
    return cookies.get(name, {doNotParse: true});
}

export default { setCookie, getCookie }
