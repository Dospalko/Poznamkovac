import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'
const loadNotes = async () => {
  const notes = await window.context.getNotes()
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}
const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const NotesAtom = unwrap(notesAtomAsync, (prev) => prev)

export const selectedNoteAtomIndex = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const selectedNoteIndex = get(selectedNoteAtomIndex)
  const notes = get(NotesAtom)
  if (selectedNoteIndex == null || !notes) return null

  const selectedNote = notes[selectedNoteIndex]
  return { ...selectedNote, content: `Hello from Note${selectedNoteIndex}` }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(NotesAtom)
  if (!notes) return null
  const title = `Note ${notes.length + 1}`
  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }
  set(NotesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])
  set(selectedNoteAtomIndex, 0)

  return null // Add this line
})
export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(NotesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (selectedNote == null || !notes) return

  set(
    NotesAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  )
  set(selectedNoteAtomIndex, null)
})
