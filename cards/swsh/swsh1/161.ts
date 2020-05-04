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
	localId: 161,


	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d’Énergie",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/161/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/161/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Studio Bora Inc.",



	effect: {
		en: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card