export function formatMemberSince(inputDateString) {
    const options = {month: "short", day: "2-digit", year: "numeric"};
    const formattedDate = new Date(inputDateString).toLocaleDateString("en-US", options);
    return formattedDate;
    
}
export function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Determine the correct suffix for the day
    const daySuffix = (day) => {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
}

