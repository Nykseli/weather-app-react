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
    return cookies.get(name, { doNotParse: true });
}

/**
 *
 * @param {string} name
 * @return {void}
 */
const removeCookie = (name) => {

    const cookies = new Cookies()
    cookies.remove(name, { path: '/' })
}

export default { setCookie, getCookie, removeCookie }
