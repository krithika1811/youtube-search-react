const API_URL = "AIzaSyCN3IYwi9f968P49Vrx9PLXlM3jTXCL70I";


export const searchVideos = (query) => {
    return(dispatch) => {
        dispatch({type: 'SEARCH_VIDEOS_REQUEST'});
        const xhr = new XMLHttpRequest();
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${API_URL}`;
        //fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${YOUR_SEARCH_QUERY}&maxResults=10&key=${YOUR_YOUTUBE_API_KEY}`)
        //https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=YOUR_YOUTUBE_API_KEY`
        xhr.open('GET', apiUrl);
        xhr.onload = () => {
            if(xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                dispatch({ type: 'SEARCH_VIDEOS_SUCCESS', payload: response.items });
            } else {
                dispatch({ type: 'SEARCH_VIDEOS_FAILURE', error: xhr.statusText});
            }
        };
        xhr.onerror = () => dispatch({ type: 'SEARCH_VIDEOS_FAILURE', error: 'Request failer'});
        xhr.send();
    };
};


// // export const searchVideos = (query) => {
// //     return async (dispatch) => {
// //         dispatch({ type: 'SEARCH_VIDEOS_REQUEST' });

// //         // Define the API URL based on whether a query is provided
// //         const apiUrl = query
// //             ? `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${API_URL}`
// //             : `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=15&key=${API_URL}`;

// //         try {
// //             const response = await fetch(apiUrl);
// //             if (!response.ok) {
// //                 throw new Error(response.statusText || 'Failed to fetch videos');
// //             }
// //             const data = await response.json();
// //             dispatch({ type: 'SEARCH_VIDEOS_SUCCESS', payload: data.items });
// //         } catch (error) {
// //             dispatch({ type: 'SEARCH_VIDEOS_FAILURE', error: error.message });
// //         }
// //     };
// // };

// export const searchVideos = (query) => {
//     return (dispatch) => {
//         dispatch({ type: 'SEARCH_VIDEOS_REQUEST' });
        
//         const xhr = new XMLHttpRequest();
//         let apiUrl;

//         // Check if query exists; if so, use search URL, otherwise fetch popular videos
//         if (query) {
//             apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${API_URL}`;
//         } else {
//             apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=${API_URL}`;
//         }

//         xhr.open('GET', apiUrl);
//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 const response = JSON.parse(xhr.responseText);
//                 dispatch({ type: 'SEARCH_VIDEOS_SUCCESS', payload: response.items });
//             } else {
//                 dispatch({ type: 'SEARCH_VIDEOS_FAILURE', error: xhr.statusText });
//             }
//         };
//         xhr.onerror = () => dispatch({ type: 'SEARCH_VIDEOS_FAILURE', error: 'Request failed' });
//         xhr.send();
//     };
// };