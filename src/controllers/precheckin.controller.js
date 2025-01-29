import { Precheckin } from "../models/Precheckin.js";

export const getPrecheckins = async (req, res) => {
  try {
    const precheckins = await Precheckin.findAll();
    res.json(precheckins);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPrecheckin = async (req, res) => {
  try {
    const { id_reserva } = req.params;
    const precheckins = await Precheckin.findAll({
      where: {
        id_reserva, 
      },
    });

    if (!precheckins || precheckins.length === 0)
      return res.status(404).json({ message: "Precheckin not found" });
    res.json(precheckins); // Devuelve un array de objetos
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
  
export const createPrecheckin = async (req, res) => {
  const {
    tipoDocumento,
    documento,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    direccion,
    pais,
    ciudad,
    telefono,
    email,
    paisOrigen,
    ciudadOrigen,
    paisDestino,
    ciudadDestino,
    huespedPrincipal,
    id_reserva,
    id_reserva_habitacion,
    nombre_tipo_habitacion,
    id_check_in,
    id_check_in_habitacion,
    id_habitacion,
    id_cliente,
    fecha_ingreso,
    fecha_salida,
    id_pais_origen,
    id_ciudad_origen,
    id_pais_destino,
    id_ciudad_destino,
    id_relacion_huesped,
    id_externo,
    id_siat,
    estado,
  } = req.body;

  console.log("Datos recibidos en el backend:", req.body);

  try {
    const [newPrecheckin, created] = await Precheckin.upsert({
      tipoDocumento,
      documento,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      direccion,
      pais,
      ciudad,
      telefono,
      email,
      paisOrigen,
      ciudadOrigen,
      paisDestino,
      ciudadDestino,
      huespedPrincipal,
      id_reserva,
      id_reserva_habitacion,
      nombre_tipo_habitacion,
      id_check_in,
      id_check_in_habitacion,
      id_habitacion,
      id_cliente,
      fecha_ingreso,
      fecha_salida,
      id_pais_origen,
      id_ciudad_origen,
      id_pais_destino,
      id_ciudad_destino,
      id_relacion_huesped,
      id_externo,
      id_siat,
      estado,
    });

    // Responde con el registro creado o actualizado
    res.json(newPrecheckin);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePrecheckin = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      
      tipoDocumento,
      documento,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      direccion,
      pais,
      ciudad,
      telefono,
      email,
      paisOrigen,
      ciudadOrigen,
      paisDestino,
      ciudadDestino,
      huespedPrincipal,
      id_reserva,
      id_reserva_habitacion,
      nombre_tipo_habitacion,
      id_check_in,
      id_check_in_habitacion,
      id_habitacion,
      id_cliente,
      fecha_ingreso,
      fecha_salida,
      id_pais_origen,
      id_ciudad_origen,
      id_pais_destino,
      id_ciudad_destino,
      id_relacion_huesped,
      id_externo,
      id_siat,
      estado,
    } = req.body;

    const precheckin = await Precheckin.findByPk(id);
    precheckin.id = id;
    precheckin.tipoDocumento = tipoDocumento;
    precheckin.documento = documento;
    precheckin.primerNombre = primerNombre;
    precheckin.segundoNombre = segundoNombre;
    precheckin.primerApellido = primerApellido;
    precheckin.segundoApellido = segundoApellido;
    precheckin.direccion = direccion;
    precheckin.pais = pais;
    precheckin.ciudad = ciudad;
    precheckin.telefono = telefono;
    precheckin.email = email;
    precheckin.paisOrigen = paisOrigen;
    precheckin.ciudadOrigen = ciudadOrigen;
    precheckin.paisDestino = paisDestino;
    precheckin.ciudadDestino = ciudadDestino;
    precheckin.huespedPrincipal = huespedPrincipal;
    precheckin.id_reserva = id_reserva;
    precheckin.id_reserva_habitacion = id_reserva_habitacion;
    precheckin.nombre_tipo_habitacion = nombre_tipo_habitacion;
    precheckin.id_check_in = id_check_in;
    precheckin.id_check_in_habitacion = id_check_in_habitacion;
    precheckin.id_habitacion = id_habitacion;
    precheckin.id_cliente = id_cliente;
    precheckin.fecha_ingreso = fecha_ingreso;
    precheckin.fecha_salida = fecha_salida;
    precheckin.id_pais_origen = id_pais_origen;
    precheckin.id_ciudad_origen = id_ciudad_origen;
    precheckin.id_pais_destino = id_pais_destino;
    precheckin.id_ciudad_destino = id_ciudad_destino;
    precheckin.id_relacion_huesped = id_relacion_huesped;
    precheckin.id_externo = id_externo;
    precheckin.id_siat = id_siat;
    precheckin.estado = estado;

    await precheckin.save();

    res.json({ precheckin });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePrecheckin = async (req, res) => {
  try {
    const { id } = req.params;
    await Precheckin.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
