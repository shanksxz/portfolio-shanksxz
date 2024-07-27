"use server"

export default async function fetchImg(id : string) {
    const url = `https://api.github.com/users/${id}`
    const res = await fetch(url);
    const data = await res.json();
    return data.avatar_url;
}