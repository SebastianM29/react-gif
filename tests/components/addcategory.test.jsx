import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"





describe('pruebas en AddCategoy', () => { 
    test('debe mostrar el valor cambiado', () => { 
       
        render(<AddCategory onNewCategory={()=>{}}/>)
        screen.debug()
        const inpuT = screen.getByRole('textbox');
        fireEvent.input(inpuT, {target:{value: 'algo'}})
        screen.debug()
       //como tengo acceso al html en el inpuT... ya puedo seleccionar EL INPUT VALUE
        expect(inpuT.value).toBe('algo')


     })

     test('Debe llamar onNewCategory si el input tiene el valor', () => { 
            
           const inputValue = 'modificando valor'
           const funcionOnNewCategory = jest.fn()



           //de la funcion que estamos recibiendo lo unico que me interesa es que se envie el valor  -
           render(<AddCategory onNewCategory={funcionOnNewCategory}/>)

           const inpuT = screen.getByRole('textbox');
           const forM = screen.getByRole('form')

           fireEvent.input(inpuT, {target:{value:inputValue}})
           screen.debug()
           fireEvent.submit(forM)

           expect(inpuT.value).toBe('')
           expect(funcionOnNewCategory).toHaveBeenCalledTimes(1);
           expect(funcionOnNewCategory).toHaveBeenCalledWith(inputValue);
           
    })
    test('no debe llamar a onNewCategory si esta vacio el input', () => { 
        const funcionOnNewCategory = jest.fn()
        render(<AddCategory onNewCategory={funcionOnNewCategory}/>)
        const inpuT = screen.getByRole('textbox');
        const forM = screen.getByRole('form')
        fireEvent.input(inpuT, {target:{value:''}})
        fireEvent.submit(forM)
        screen.debug()
        expect(funcionOnNewCategory).toHaveBeenCalledTimes(0);

    
    })
 })