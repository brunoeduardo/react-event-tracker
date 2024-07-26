import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useExcluirEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return ((evento: IEvento) => {
        return setListaDeEventos(listaAntiga => listaAntiga.filter((item: IEvento) => item.id !== evento.id))
    })
}

export default useExcluirEvento
