import axios from 'axios'

export async function getPosts () {
    const { data } = await axios.get(
      "https://dummyjson.com/posts"
    );
    return data;
}