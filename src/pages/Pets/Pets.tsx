import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { useQuery } from "@tanstack/react-query";
import { getPets } from "../../services/pets/getPets";

export function Pets(){
    const { data , isLoading } = useQuery({
        queryKey: ['get-pets'],
        queryFn: () => getPets(),
    })

    return (
    <Grid>
        <div className={styles.container}>
            <Header />
            <main className={styles.list}>
                {data?.items?.map((pet) => (
                    <Card
                        key={pet.id}
                        href={`/pets/${pet.id}`}
                        text={pet.name}
                        thumb={pet.photo}
                    />
                ))}
            </main>
        </div>
    </Grid>
  )
}