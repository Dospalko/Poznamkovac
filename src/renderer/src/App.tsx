import { Content, RootLayout, Sidebar, TopBar } from '@/components'
import { useRef } from 'react'
import ActionButtonsRow from './components/ActionButtonsRow'
import FloatingNoteTitle from './components/FloatingNoteTitle'
import MarkDownEditor from './components/MarkDownEditor'
import NotePreview from './components/NotePreviewList'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      <TopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreview className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-600/40 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
