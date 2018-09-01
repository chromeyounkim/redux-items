export function itemHasErrored(error) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        payload: error
    }
}

export function itemsIsLoading(loading) {
    return {
        type: 'ITEMS_IS_LOADING',
        payload: loading
    }
}

export function itemsFetched(items) {
    return {
        type: 'ITEMS_FETCHED',
        payload: items
    }
}

export function itemsFetch(url) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));

      fetch(url)
       .then((response) => {
           dispatch(itemsIsLoading(false));
           return response;
       })
       .then((response) => {
           return response.json();
       })
       .then((items) => {
           dispatch(itemsFetched(items));
       })
       .catch((e) => {
            dispatch(itemsIsLoading(false));
            dispatch(itemHasErrored(true));
       })
  }
}