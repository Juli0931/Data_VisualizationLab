async function getData(URL) {
    const request = await fetch(URL, request);
    const data = await request.json();
    return data
}
