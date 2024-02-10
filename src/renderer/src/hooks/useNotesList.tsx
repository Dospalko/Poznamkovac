import { NotesAtom, selectedNoteAtomIndex } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(NotesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteAtomIndex)
  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }
  return { notes, selectedNoteIndex, handleNoteSelect }
}
