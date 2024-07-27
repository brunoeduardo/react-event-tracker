import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventoAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventoAsync
})

export const filtroDeEventos = atom<IFiltroEventos>({
    key: 'filtroDeEventos',
    default: {}
})