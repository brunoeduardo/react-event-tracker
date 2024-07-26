import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../utils"

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return ((novoEvento: IEvento) => {
        const hoje = new Date()
        if (novoEvento.inicio < hoje) throw Error("Eventos não podem ser cadastrados com data menor do que a atual.")

        novoEvento.id = obterId()

        return setListaDeEventos((listaAntiga: IEvento[]) => [...listaAntiga, novoEvento])
    })
}

export default useAdicionarEvento