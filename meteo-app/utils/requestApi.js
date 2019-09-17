const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '243e9411e97af097e206ccd5c1d3ffa4';

export function requestGet(endPoint, query='') {
    const headers = {
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

export function groupRequestCity(endPoint, tabOptions) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const tabPromises = tabOptions.reduce((acc, element) => {
        const ep = `${endPoint}?q=${element}&units=metric&APPID=${apiKey}`;
        acc.push(
            fetch(baseUrl + ep, {
                method: 'GET',
                headers,
            })
        );
        return acc;
    }, []);

    return Promise.all(tabPromises)
        .then(response => {
            const datas = response.reduce((acc, res) => {
                acc.push(res.json());
                return acc;
            }, []);
            return Promise.all(datas)
                .then(infos => infos)
        });      
}