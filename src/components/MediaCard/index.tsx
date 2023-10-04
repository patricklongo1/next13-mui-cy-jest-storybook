import Image from 'next/image'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { handleCancel, handleSubmit } from './functions/mediaCardFunctions'

interface MediaCardProps {
  /**
   * O titulo do cartão de mídia.
   */
  heading: string

  /**
   * O texto descritivo exibido no cartão de mídia.
   */
  text: string
}

/**
 *  MediaCard eh o meu component top huasuhsahuasuhashuasuhasuhasuhasuhashu
 * MediaCard eh o meu component top huasuhsahuasuhashuasuhasuhasuhasuhashu
 * MediaCard eh o meu component top huasuhsahuasuhashuasuhasuhasuhasuhashu
 * MediaCard eh o meu component top huasuhsahuasuhashuasuhasuhasuhasuhashu
 * MediaCard eh o meu component top huasuhsahuasuhashuasuhasuhasuhasuhashu
 */
export default function MediaCard({ heading, text }: MediaCardProps) {
  return (
    <Card>
      <Image
        alt="Random image"
        src="https://images.unsplash.com/photo-1693761935617-419019f41aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAwNjQzNw&ixlib=rb-4.0.3&q=80&w=1080"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleSubmit('enviando')} size="small">
          Submit
        </Button>
        <Button onClick={handleCancel} size="small">
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}
