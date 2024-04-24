import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";


export function Shelter(){

    function submit(event){
        event.preventDefault()
        console.log('submit')
    }

    return (
    <Panel>
    <form className={styles.container}
    onSubmit={submit}>
        <Input label="Nome"/>
        <Button type="submit" >Salvar dados</Button>
    </form>
    </Panel>
    )
}