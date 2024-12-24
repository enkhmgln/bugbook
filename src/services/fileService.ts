import path from "path";

const uploadFile = async (file: any, folder: "audio" | "images" | "albums") => {
  const fileName = `${Date.now()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), "uploads", folder, fileName);

  await file.mv(uploadPath);

  return `/uploads/${folder}/${fileName}`;
};

export { uploadFile };
