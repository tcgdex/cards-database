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
	localId: 164,


	// Card informations
	name: {
		en: "Great Ball",
		fr: "Super Ball",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/164/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/164/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	effect: {
		en: "Look at the top 7 cards of your deck. You may reveal a Pokémon you find there and put it into your hand. Shuffle the other cards back into your deck.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card