import multer from 'multer';
import nextConnect from 'next-connect';
import { v4 as uuidv4 } from 'uuid';

let filename = `${uuidv4()}-${new Date().getTime()}`;

const getFileName = (file: { originalname: string }) => {
  filename += `.${file.originalname.substring(
    file.originalname.lastIndexOf('.') + 1,
    file.originalname.length
  )}`;
  return filename;
};
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/profiles', // destination folder
    filename: (req: any, file: any, cb: (arg0: null, arg1: string) => any) =>
      cb(null, getFileName(file)),
  }),
});

const apiRoute = nextConnect({
  onError(
    error: { message: any },
    req: any,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { error: string }): void; new (): any };
      };
    }
  ) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(
    req: { method: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { error: string }): void; new (): any };
      };
    }
  ) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('file')); // attribute name you are sending the file by

apiRoute.post(
  (
    req: any,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { data: string }): void; new (): any };
      };
    }
  ) => {
    res.status(200).json({ data: `/uploads/profiles/${filename}` }); // response
  }
);

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
