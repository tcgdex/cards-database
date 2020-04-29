import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swsh1'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `${set.code}-${localId}`,
	localId: 185,


	// Card informations
	name: {
		en: "Vitality Band",
		fr: "Bandeau Vitalité",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/185/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/185/low",
			},


	},



	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	effect: {
		en: "The attacks of the Pokémon this card is attached to do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card