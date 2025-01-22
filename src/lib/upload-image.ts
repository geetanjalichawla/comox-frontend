/**
 * Uploads a file to Cloudinary and returns the URL of the uploaded image.
 * @param image The image to upload.
 * @returns A promise that resolves to the URL of the uploaded image.
 */
export const uploadImage = async (image: File): Promise<string> => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "como-x");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dvqkqj3fu/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const json = await res.json();
  return json.secure_url;
}