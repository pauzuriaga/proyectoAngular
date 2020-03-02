import { Request, Response} from 'express';
import db from '../database'

class ProductosController {
    public async list (req: Request, res: Response){
       const productos = await db.query("select * from productos");
        res.json(productos);
    }
    public async listOne (req: Request, res: Response):Promise <any>{
        const {id} = req.params;
        const producto = await db.query("select * from productos where idproducto =?", [id])
        if (producto.length>0) {
            return res.json(producto[0]);
        }
        res.status(404).json({text:'el producto no existe'});
        
    }
    public async create (req:Request, res:Response){
       await db.query("insert into productos set ?", [req.body]);       
        res.json('producto creado');
    }
    public async update (req:Request, res:Response){
        const {id} = req.params;
        await db.query("update productos set ? where idproducto = ?", [req.body, id])
        res.json({text: 'actualizando producto ' + id});
    }
    public async delete (req:Request, res:Response){
        const {id} = req.params;
        await db.query("delete from productos where idproducto = ?", [id])
        res.json({text: 'producto eliminado'});
    }
}
export const productosController = new ProductosController;