import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideos } from '../redux/actions';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    
    // Optionally, retrieve search results from Redux state (if needed)
    const searchResults = useSelector(state => state.searchResults); 

    useEffect(() => {
        // If query is empty, show default content (popular videos, for example)
        if (!query.trim()) {
            dispatch(searchVideos('Most Popular'));  // Default search query to fetch popular videos
        } else {
            dispatch(searchVideos(query));  // Dispatch search with user input
        }
    }, [query, dispatch]);

    const handleSearch = () => {
        dispatch(searchVideos(query.trim() || 'Most Popular')); // Default if query is empty
        // const searchQuery = query.trim() ? query : 'popular videos';
        // dispatch(searchVideos(searchQuery));
    };

    return (
        <div className="app">
            <div className="search-bar">
                <input
                    type="text"
                    value={query}  // Show query or empty string
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                />
                <button onClick={handleSearch} className="search-button">
                    🔍
                </button>
            </div>

            {/* <div className="content">
                {query.trim() === '' ? (
                    <div>
                        <h2>Popular Videos</h2>
                        {/* You can render popular videos or any default content here
                        <p>Displaying popular videos by default.</p>
                    </div>
                ) : (
                    <div>
                        <h2>Search Results</h2>
                        {/* Render search results 
                        {searchResults && searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map((video, index) => (
                                    <li key={index}>{video.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                )}
            </div> */}
        </div>
    );
}


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { searchVideos } from '../redux/actions';

// export default function SearchBar() {
//     const [query, setQuery] = useState('');
//     const dispatch = useDispatch();

//     // const handleSearch = () => {
//     //     if(query.trim()){
//     //         dispatch(searchVideos(query));
//     //     }
//     // };

//     const handleSearch = () => {
//         const searchQuery = query.trim() ? query : 'Popular Content';
//         dispatch(searchVideos(searchQuery));
//     };

//     return(
//         <div className="app">
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     value = {query.trim() || 'popular content'}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search"
//                 />
//                 {/* <button onClick={handleSearch}> Search </button> */}
//                 <button onClick={handleSearch} className="search-button">
//                       🔍
//                 </button>
//             </div>
//         </div>

//     );
// }

