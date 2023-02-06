import { Card, Serie, Set, SupportedLanguages } from '../../meta/definitions/database'

export type FileFunction = (lang: SupportedLanguages) => Promise<any>

export interface FetchedFile {
	path: string
	updated: string
}

export type IntermediateSet = Omit<Set, 'serie'> & { cards: Array<IntermediateCard>, serie: IntermediateSerie } & FetchedFile
export type IntermediateSerie = Serie & { sets: Array<IntermediateSet> } & FetchedFile
export type IntermediateCard = Omit<Card, 'set'> & { set: IntermediateSet } & FetchedFile

export type DataTree = Array<IntermediateSerie>
