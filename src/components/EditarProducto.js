import React, { Component } from 'react';

// Redux
import {connect} from 'react-redux';
import {mostrarProducto} from '../actions/productosActions';

class EditarProducto extends Component {
    
    state = {
        nombre: '',
        precio: '',
        error: false
    }

    nombreProducto = e => {
        this.setState({nombre: e.target.value});
    }
    precioProducto = e => {
        this.setState({precio: e.target.value});
    }
    actualizarProducto = e => {
        e.preventDefault();
        
        const {nombre, precio} = this.state;

        if(nombre === '' || precio === '') {
            this.setState({
                error: true
            });
            return;
        }
        
        this.setState({error:false});

        // Crear el objeto
        const infoProducto = {
            nombre,
            precio
        }

        // Crear el nuevo producto
        this.props.(infoProducto);

        // Redireccionar
        this.props.history.push('/');

    }

    render() {
        const {error} = this.state;
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.actualizarProducto}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>
                            {error ? 
                                <div className="font-wight-bold alert alert-danger text-center mt-4">
                                    Todos los campos son obligatorios
                                </div>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// state
const mapStateToProps = state => ({
    producto: state.productos.producto
});
export default connect(mapStateToProps, {mostrarProducto})(EditarProducto);