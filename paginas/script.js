const listar = async () => {

    try {

        const response = await fetch('https://apicarro.vercel.app/listar')
        
        const data = await response.json()

        const listaItens = data.map(item => {
            return `
                <tr>
                    <td>${item.marca}</td>
                    <td>${item.nome}</td>
                    <td>${item.ano}</td>
                </tr>
            `
        }).join('')

        document.querySelector('#tabelaCarros tbody').innerHTML = listaItens

    } catch (error) {
        console.log('Erro ao listar os carros:', error)

        document.querySelector('#tabelaCarros tbody').innerHTML = `
            <tr>
                <td colspan="3">Erro ao buscar os carros!</td>
            </tr>
        `
    }

}

listar()