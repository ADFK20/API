import sharp from 'sharp'
import fs from 'fs'
// the resize fun
const resize = async ( width:number, height:number, location: string, newlocation : string) => {
  const resizeimg = await
  //using sharp to resize my image
             sharp(location)
             .resize(width, height)
             .jpeg({ mozjpeg: true })
            //addind the  new image 
              return fs.promises.writeFile(newlocation, resizeimg) as unknown ;
            };

        export default resize;