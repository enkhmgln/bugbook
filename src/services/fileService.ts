import path from "path";

const uploadFile = async (file: any, folder: "audio" | "images" | "albums") => {
  const fileName = `${Date.now()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), "uploads", folder, fileName);

  await file.mv(uploadPath);

  return `/uploads/${folder}/${fileName}`;
};
const deleteFile = async (filePath: string) => {
  const fullPath = path.join(process.cwd(), filePath);
  await new Promise((resolve, reject) => {
    require("fs").unlink(fullPath, (err: any) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};

export { uploadFile };
