export default async function getProducts() {
    try {
        const response = await fetch("http://localhost:8000/");

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log("ERROR: ", error);
    }
}
