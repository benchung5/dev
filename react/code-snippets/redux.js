//access reducer from action creator:
export function deleteTree(tree, search, offset, limit) {
        return function(dispatch, getState) {
        // post to http://192.168.99.100/trees/delete
        axios.post(`${SERVER_URL}/trees/delete`, { tree })
        .then( response => {
            if(response.data.error) {
                console.log('error: ', response.data.error);
                //dispatch(deleteTreeError(`there was an error deleting the tree: ${response.data.error}`));
            } else {
                //get the new list of trees now that one is deleted
                //we can access the globalTrees reducer from getState (passed in above)
                dispatch(searchTrees(getState().globalTrees));
            }
        })
        .catch((err) => {
            console.log('error deleting the tree: ', err);
        });
    }
}