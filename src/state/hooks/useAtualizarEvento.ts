import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"


const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return ((eventoAtualizado: IEvento) => {
        return setListaDeEventos(listaAntiga => {
            const index = listaAntiga.findIndex((item: IEvento) => item.id === eventoAtualizado.id)
            return [...listaAntiga.slice(0, index), eventoAtualizado, ...listaAntiga.slice(index + 1)]
        })
    })
}

export default useAtualizarEvento