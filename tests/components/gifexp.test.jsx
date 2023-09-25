import { render, screen } from "@testing-library/react"
import { Gifexp } from "../../src/components"
import { useFetchGifs } from "../../src/hook/useFetchGifs"
//simular que este hook personalizado me devuelva imagenes y el valor isLoading
jest.mock("../../src/hook/useFetchGifs")


describe('Pruebas en gifexp', () => { 


    const category = 'neron'
    test('debe de mostrar el loading ', () => { 
           useFetchGifs.mockReturnValue({
            imagenes:[],
            isLoading : true
           })
        
           render(<Gifexp category={category}/>)
           screen.debug()
           expect(screen.getByText('cargando')).toBeTruthy()
           expect(screen.getByText(category)).toBeTruthy()


    })

    test('debe de mostrar imagenes', () => { 

        const gifs = [
            {
                
                id:'data.id',
                title:'data.title',
                image:'data.images.downsized_medium.url'
            },
            {
                id:'data.iddos',
                title:'data.title',
                image:'data.images.downsized_medium.url'

            }

        ]
        useFetchGifs.mockReturnValue({
            imagenes:gifs,
            isLoading : false
        })
        render(<Gifexp category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)




    })
 })