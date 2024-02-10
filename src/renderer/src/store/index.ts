import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { notesMock } from './mocks'

export const NotesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteAtomIndex = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const selectedNoteIndex = get(selectedNoteAtomIndex)
  const notes = get(NotesAtom)
  if (selectedNoteIndex == null) return null

  const selectedNote = notes[selectedNoteIndex]
  return { ...selectedNote, content: `Hello from Note${selectedNoteIndex}` }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(NotesAtom)
  const title = `Note ${notes.length + 1}`
  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }
  set(NotesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])
  set(selectedNoteAtomIndex, 0)
})
export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(NotesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (selectedNote == null) return

  set(
    NotesAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  )
  set(selectedNoteAtomIndex, null)
})
