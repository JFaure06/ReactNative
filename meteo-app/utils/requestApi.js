const baseUrl = '';
const apiKey = '';

export function requestGet(endPoint, query='') {
    const hearders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&APPID=${apiKey}`;

    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response
            .json()
            .then(json => {
                return json !== undefined ? json : {};
            })
            .catch(e => ({}));
        }
        return response.status;
    });
}