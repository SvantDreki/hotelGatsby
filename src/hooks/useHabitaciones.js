import {graphql, useStaticQuery} from 'gatsby'



const useHabitaciones = () => {

    const datos = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion {
                nodes {
                    id
                    slug
                    titulo
                    contenido
                    imagen {
                        gatsbyImageData 
                    }
                }
            }
        }
    `);

    return datos.allDatoCmsHabitacion.nodes.map(habitacion => ({
        id: habitacion.id,
        slug: habitacion.slug,
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
    }));
}

export default useHabitaciones
