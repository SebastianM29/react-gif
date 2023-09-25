import { renderHook, screen, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hook/useFetchGifs"
//renderHook se utiliza para los hooks personalizados
describe('probando los hooks', () => { 
    test(' Estado inicial', () => { 
   
          const { result } = renderHook(()=> useFetchGifs('goku'))  
          const {imagenes , isLoading} = result.current 
          expect(imagenes).toStrictEqual([]);
          expect(isLoading).toBe(true)




    })

    test('obteniendo imagenes', async() => { 
          
       const {result} = renderHook(()=> useFetchGifs('goku'))
       await waitFor(
        () => expect(result.current.imagenes.length).toBeGreaterThan(0)
       );
       const {imagenes,isLoading} = result.current
       expect(imagenes.length).toBeGreaterThan(0)
       expect(isLoading).toBeFalsy()
     })

})