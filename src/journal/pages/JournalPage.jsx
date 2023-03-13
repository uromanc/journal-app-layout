import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa et neque impedit ratione, in accusantium harum veritatis ad, earum vero voluptatem cumque aut dolore explicabo ipsa repellat voluptatum at.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size='large'
        sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.7 }, position: 'fixed', right: 50, bottom: 50 }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}