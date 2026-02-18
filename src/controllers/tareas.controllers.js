import { pool } from '../db.js'

export const getTareas = async (req,res)=>{
    const {rows} = await pool.query('SELECT * FROM tareas')
    res.json(rows)
}

export const getTareaByID = async (req,res)=>{
    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM tareas WHERE id = $1', [id])
    
    if (rows.length ===0){
        return res.status(404).json({message: "tarea no encontrada"})
    }
    
    res.json(rows[0])
}

export const createTarea = async (req,res)=>{
    try {
            const data = req.body
    console.log(data)
    const {rows} = await pool.query('INSERT INTO tareas (titulo, descripcion, fecha_limite, prioridad) VALUES ($1, $2, $3, $4) RETURNING *', [data.titulo, data.descripcion, data.fecha_limite, data.prioridad])    
    console.log(rows)
    return res.json(rows[0])
    } catch (error) {
        if (error?.code === '23505'){
            return res.status(409).json({message: "La tarea ya existe"})
        }
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }

}

export const deleteTarea = async (req,res)=>{
    const {id} = req.params
    const {rowCount} = await pool.query('DELETE FROM tareas WHERE id = $1 RETURNING *', [id])    
    console.log(rowCount)

    if (rowCount === 0){
        return res.status(404).json({message: "tarea no encontrada"})
    }

    return res.sendStatus(204)
}

export const updateTarea = async(req,res)=>{


    const{id} =req.params
    const data = req.body
    const {rows} = await pool.query('UPDATE tareas SET titulo = $1, descripcion = $2, fecha_limite = $3, prioridad = $4 WHERE id = $5 RETURNING *', [data.titulo, data.descripcion, data.fecha_limite, data.prioridad, id])

    console.log(rows)

    return res.json(rows[0])
}