import sharp from 'sharp'
import fs from 'fs'
const resize = async ( width:number, height:number, location: string, newlocation : string) => {
  const resizeimg = await
  
             sharp(location)
             .resize(width, height)
             .jpeg({ mozjpeg: true })
            .toBuffer()
              return fs.promises.writeFile(newlocation, resizeimg) as unknown as Buffer;
            };

        export default resize;