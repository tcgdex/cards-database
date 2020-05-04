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
	localId: 162,


	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d’Énergie",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/162/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/162/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	effect: {
		en: "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card