import { useRecoilValue } from "recoil"
import { filtroSeletorState } from "../seletores"

const useListaEventos = () => {
    return useRecoilValue(filtroSeletorState)
}

export default useListaEventos