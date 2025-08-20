const getBotStatus = async () => {
    try {
        const response = await fetch('/api/bot-status');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

export default getBotStatus;
