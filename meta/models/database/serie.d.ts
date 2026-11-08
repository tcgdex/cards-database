import { LanguageSpecific, TCGType } from '../globals'

export interface Serie {
	id: string
	name: LanguageSpecific<string>

	/**
	 * Serie Energy cards
	 */
	energies?: Array<TCGType>
}
