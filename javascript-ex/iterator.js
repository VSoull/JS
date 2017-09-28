const Iterator = (arrayArg) => {
    let index = 0;

    const hasElement = () => index <= arrayArg.length ? true : false;

    const throwError = message => { throw new Error(message) };

    const errorMessage = () => hasElement ? '' : throwError;

    const getNext = () => arrayArg[index++] || errorMessage;

    const getPrevious = () => arrayArg[--index] || errorMessage;

    const iteratorApi = {
        getNext: getNext,
        getPrevious: getPrevious
    };

    return iteratorApi;
};

export { Iterator as iterator };