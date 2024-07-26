
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { IEvento } from '../../interfaces/IEvento';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';
import useListaEventos from '../../state/hooks/useListaEventos';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useListaEventos()
  const atualizarEvento = useAtualizarEvento();

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })

  const onEventDragFinish: OnEventDragFinish = (prevEvent: CalendarEvent, updatedEvent: CalendarEvent, events: any) => {
    const indexUpdated = eventos.findIndex((item: IEvento) => item.id === updatedEvent.id)
    const elementoAtualizado = { ...eventos[indexUpdated] }

    console.log("updatedEvent => ", updatedEvent)
    console.log("eventos => ", eventos)
    console.log("indexUpdated => ", eventos[indexUpdated])

    elementoAtualizado.inicio = new Date(updatedEvent.startAt)
    elementoAtualizado.fim = new Date(updatedEvent.endAt)
    console.log("elementoAtualizado =>", elementoAtualizado)
    atualizarEvento(elementoAtualizado)
  }
  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario