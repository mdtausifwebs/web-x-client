import axios from "axios";
const url = "http://localhost:4000/api/v1/";

export const UploadFile = async (query,config) => {
  // console.log('query', query);
  try {
    const { data } = await axios.post(`${url}/file/upload`, query, config);
    // console.log('data UploadFile', data);
    return data;
  } catch (error) {
    console.log(`Error from  upload file Api ${error.message}`);
  }
};
export const downloadfiles = async (fileurl) => {
  try {
    fetch(fileurl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        const nameSplit = fileurl.split("/");
        const duplicatename = nameSplit.pop();
        a.download = "" + duplicatename + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.log(`error found from download file ${err}`);
      });
  } catch (error) {
    console.log(`Error from  upload file Api ${error.message}`);
  }
};
