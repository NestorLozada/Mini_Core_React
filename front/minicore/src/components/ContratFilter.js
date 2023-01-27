import { useState } from 'react';
import { fetchApi } from '../service/axios';
import './ContratFilter.css'
import ContratList from './ContratList';

function ContratFilter (){
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [contratos, setContratos] = useState([]);

    async function fetchDate(e) {
        e.preventDefault();
    
        if (startDate == null || endDate ==null) return;
    
        const response = await fetchApi(`/api/contratos/contratosfilter?startDate=${startDate}&endDate=${endDate}`, "GET");
        console.log(response)
        if (!response.ok) return console.log(response.status);

        setContratos(response.data);
      }

    return( 
    <div className="Contrat">
      <section>
      <form onSubmit={fetchDate}>
        <label>First Date</label>
        <input
          type="date"
          name="startDate"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Second Date</label>
        <input
          type="date"
          name="endDate"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <ContratList contrats={contratos}/>
      </div>
    </section>
  </div>)
}

export default ContratFilter