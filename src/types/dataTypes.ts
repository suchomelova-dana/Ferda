export type DataType = {
  fqdn: string
  nsset: NSSet
  keyset: KeySet
  owner: Contact
  sponsoring_registrar: string
  administrative_contacts: Contact[]
  expires_at: string
  events: {
    registered: Event | null
    transferred: Event | null
    updated: Event | null
    unregistered: Event | null
  }
  state_flags: {
    flags: Flag[]
    groups: string[][]
  }
}

type Dns = {
  name: string
  ip_address: string
}

export type Contact = {
  handle: string
  organization: string
  name: string
  publish: {
    organization: boolean
    name: boolean
  }
}

export type Set = {
  handle: string
  registrar: string
}

export type NSSet = Set & {
  dns: Dns[]
}

export type KeySet = Set & {
  dns_keys: string[]
}

type Event = {
  timestamp: string
  registrar_handle: string
}

type Flag = {
  name: string
  active: boolean
  description: string
}
