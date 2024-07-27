import { selector } from "recoil"
import { filtroDeEventos, listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"

export const filtroSeletorState = selector({
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

export const eventoAsync = selector({
    key: "eventoAsync",
    get: async () => {
        const result = await fetch("https://my-json-server.typicode.com/brunoeduardo/mock-api/eventTracker")
        const resultJson: IEvento[] = await result.json()
        return resultJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})

