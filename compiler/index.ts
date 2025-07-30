import { Card } from '../interfaces'
import { globSync } from 'glob'

type AugmentedCard = Card & {
    image?: string
}

type ExportedCards = Array<AugmentedCard>

globSync()