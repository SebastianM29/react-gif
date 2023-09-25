import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import React from "react";


//const mockstate = jest.fn();
//jest.spyOn(React,'useState').mockImplementation((initialValue) => [initialValue,mockstate] )

describe('first', () => { 
    test('evaluando ingreso de categoria', async() => {
     
        render(<GifExpertApp/>);
        
        const inpuT = screen.getByRole('textbox');
        const forM = screen.getByRole('form')

        fireEvent.input(inpuT, {target:{value: 'Algo'}})
        fireEvent.submit(forM)
        fireEvent.input(inpuT, {target:{value: 'algo'}})
        fireEvent.submit(forM)
        fireEvent.input(inpuT, {target:{value: 'otroAlgo'}})
        fireEvent.submit(forM)
        screen.debug()


        expect(screen.getAllByRole('heading',{level:3}).length).toBe(2)

       
        
    })

    test('evaluando categoria duplicada', async() => {
     
        render(<GifExpertApp/>);
        
        const inpuT = screen.getByRole('textbox');
        const forM = screen.getByRole('form')



        fireEvent.input(inpuT, {target:{value: 'algo'}})
        fireEvent.submit(forM)
        fireEvent.input(inpuT, {target:{value: 'otroAlgo'}})
        fireEvent.submit(forM)
        fireEvent.input(inpuT, {target:{value: 'otroAlgo'}})
        fireEvent.submit(forM)
        screen.debug()


        expect(screen.getAllByRole('heading',{level:3}).length).toBe(2)

       
        
    })
    
    
    

})