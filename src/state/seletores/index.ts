import { selector } from "recoil"
import { filtroDeEventos, listaDeEventosState } from "../atom"

export const FiltroSeletorState = selector({
    key: 'filtroState',
    get: ({ get }) => {
        const todosEventos = get(listaDeEventosState)
        const filtro = get(filtroDeEventos)

        return todosEventos.filter(evento => {
            if (!filtro.data) return true
            return filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
        })
    }
})

