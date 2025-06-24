export type LabelValueCardItem = {
  label: string
  value?: string | string[]
  shouldColor?: boolean
}

export type PublishedCardItem = LabelValueCardItem & {
  isPublished?: boolean
}

export type EventCardItem = LabelValueCardItem & {
  registrar?: string
}
