const formatShortMonthShortYear = (date) => {
    return new Intl.DateTimeFormat('en-US', {month: 'short', year: '2-digit'}).format(date);
};

export {formatShortMonthShortYear};