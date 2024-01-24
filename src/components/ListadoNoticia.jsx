import React from 'react'
import Noticia from './Noticia'

const ListadoNoticia = ({noticias, totalNoticias}) => {
  return (
    <>
        <div>
            {noticias.map( noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    </>
  )
}

export default ListadoNoticia