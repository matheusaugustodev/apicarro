const listar = async () => {

    try {

        const response = await fetch('https://apicarro.vercel.app/listar')
        const data = await response.json()
    
        console.log(data)

        // <table id="tabelaCarros">
        //     <thead>
        //         <tr>
        //             <th>Marca</th>
        //             <th>Nome</th>
        //             <th>Ano</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //     </tbody>
        // </table>

    } catch (error) {
        console.log('Erro ao listar os carros:', error)
    }

}

listar()