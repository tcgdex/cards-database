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
	localId: 179,


	// Card informations
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/179/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/179/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "sadaji",



	effect: {
		en: "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card