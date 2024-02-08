import { LuFileSignature } from 'react-icons/lu'
import ActionButton, { ActionButtonProps } from './ActionButton'
const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

export default NewNoteButton
