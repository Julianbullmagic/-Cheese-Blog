import React, {useRef} from 'react'
import { useGlobalContext } from '../context'
export default function BlogForm() {
  const {cheeses, setCheeses, setAddCheese} = useGlobalContext()
  const titleValue = React.useRef('')
const imgValue = React.useRef('')
const textValue = React.useRef('')
const categoryValue = React.useRef('')


   function handleSubmit(e) {
setAddCheese(true)
     console.log("cheeses dot length")
     var day=new Date().getDate()
     var month=new Date().getMonth()
     var year=new Date().getFullYear()
  console.log(cheeses.length)
       const datat=JSON.parse(JSON.stringify(cheeses))
       const newPost={
         id: cheeses.length,
         name: titleValue.current.value,
         category:categoryValue.current.value,
         image:imgValue.current.value,
         text:textValue.current.value,
         date:`${day},${month},${year}`
       }
       console.log(newPost)
     datat.push(newPost)
     setCheeses(datat)
e.preventDefault()
   }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
        <label htmlFor='name'>Title</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={titleValue}

        />
        <label htmlFor='name'>Category</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={categoryValue}

        />
        <label htmlFor='name'>Image</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={imgValue}

        />
          <label htmlFor='name'>Text</label>

          <textarea ref={textValue} id="name" name="name" rows="20" cols="70">
</textarea>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  )
}
