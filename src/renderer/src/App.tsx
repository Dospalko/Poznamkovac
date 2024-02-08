import { Content, RootLayout, Sidebar, TopBar } from '@/components'
import ActionButtonsRow from './components/ActionButtonsRow'

const App = () => {
  return (
    <>
      <TopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-600 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
