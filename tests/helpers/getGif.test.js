
import { searchingDatos } from "../../src/helpers/getGif"

describe('recibiendo categoria', () => {
    test(' debe retornar los valores', async() => { 
        const gif = await searchingDatos('goku')
        console.log (gif)
        expect(gif.length).toBeGreaterThan(0)
        //se puede evaluar por la ubicacion 
        //expect(gif[0]).toequal({objeto})
        expect(gif).toContainEqual({
            id:expect.any(String),
            title: expect.any(String),
            image: expect.any(String)

        })

     })
 })