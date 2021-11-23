import { SupportedLanguages } from '../../interfaces'

export type FileFunction = (lang: SupportedLanguages) => Promise<Array<any>>
