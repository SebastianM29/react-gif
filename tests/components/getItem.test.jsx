import { render, screen } from "@testing-library/react";
import { GetItem } from "../../src/components";

describe('debo obtener los 3 argumentos', () => { 

    const title = 'imagen dragon ball'
    const image = 'http://localhost/imagen'
    const id = '123456'
    

   

    test('snapshot', () => { 
        const{container,getByText} = render(<GetItem title={title} image={image} id={id}/>)
        expect(container).toMatchSnapshot()
    })

    test('recibiendo imagen con el url y el alt alternativo', () => { 

        
         render(<GetItem title={title} image={image} id={id}/>)
        screen.debug()
        //screen.getByRole('img').src o screen.getByRole('img').alt  se desestructura
        const {src,alt} = screen.getByRole('img')
        console.log(src,alt)
        expect(src).toBe(image)
        expect(alt).toBe(title)
      


     })
     test('titulo en parrafo', () => { 

        const {container} = render(<GetItem title={title} image={image} id={id}/>)
        const p = container.querySelector('p');
        expect(p.innerHTML).toContain(title)
        //otra manera de hacerlo 
        //expect (screen.getByText(title)).toBeTruthy()
      })
   
   

 })