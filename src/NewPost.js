const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
    return (
        <main className="NewPost">
            <h2>NewPost</h2>
            <form action="" className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input type="text"
                    id="postTitle"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    name=""
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                >Submit</button>
            </form>
        </main>
    )
}

export default NewPost
