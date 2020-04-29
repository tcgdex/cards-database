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
	localId: 163,


	// Card informations
	name: {
		en: "Evolution Incense",
		fr: "Encens d’Évolution",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/163/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/163/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	effect: {
		en: "Search your deck for an Evolution Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card