import { useRecoilValue } from "recoil"
import { FiltroSeletorState } from "../seletores"

const useListaEventos = () => {
    return useRecoilValue(FiltroSeletorState)
}

export default useListaEventos