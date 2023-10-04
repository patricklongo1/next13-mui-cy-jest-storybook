// stories.tsx
import { Meta, StoryFn } from '@storybook/react'
import MediaCard from './index'

export default {
  title: 'Components/MediaCard',
  component: MediaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface MediaCardProps {
  heading: string
  text: string
}

const Template: StoryFn<MediaCardProps> = (args) => <MediaCard {...args} />

export const Full = Template.bind({})
Full.args = {
  heading: 'Title',
  text: 'Your best description here',
}

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  text: 'Your best description here',
}
