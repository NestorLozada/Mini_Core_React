
function ContratList({ contrats }) {
    if (contrats.length == 0) {
        return (<p>No se encontraron resultados</p>    )
    } else {
        return (
             <table>
                <thead>
                <tr>
                    <th>Cliente</th> 
                    <th>Monto total</th>
                    </tr>
                    </thead>
                    <tbody> {contrats.map(contract => (
                        <tr>
                             <td>{contract.cliente}</td>
                             <td>{contract.totalMonto}</td> 
                             </tr>                ))}
                </tbody>        </table>    )
    }

}
export default ContratList