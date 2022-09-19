// import FormData from 'form-data';
import formidable from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

// type ProcessedFiles = Array<[string, File]>;

const handler = async (req, res) => {
  let status = 200;
  let resultBody = {
    status: 'ok',
    message: 'Files were uploaded successfully',
  };

  const files = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    const filey = [];
    form.on('file', (field, file) => {
      filey.push([field, file]);
    });
    form.on('end', () => resolve(filey));
    form.on('error', (err) => reject(err));
    form.parse(req, () => {
      //
    });
  }).catch(() => {
    status = 500;
    resultBody = {
      status: 'fail',
      message: 'Upload error',
    };
  });

  if (files?.length) {
    const targetPath = path.join(process.cwd(), `/uploads/`);
    try {
      await fs.access(targetPath);
    } catch (e) {
      await fs.mkdir(targetPath);
    }

    const datafile = files[0]?.[1];
    const formData = new FormData();
    const fileBuffer = await fs.readFile(datafile?.filepath);
    const newblob = new Blob([fileBuffer], { type: datafile.mimetype ?? '' });
    formData.append('file', newblob, datafile.originalFilename);

    const image = await fetch('http://3.110.64.51/workflow_API/api/SaveFile', {
      method: 'POST',
      body: formData,
    });
    const imageResponse = await image.json();
    console.log(imageResponse);
  }

  res.status(status).json(resultBody);
};

export default handler;
