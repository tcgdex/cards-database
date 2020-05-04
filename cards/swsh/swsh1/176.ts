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
	localId: 176,


	// Card informations
	name: {
		en: "Pokémon Center Lady",
		fr: "Dame du Centre Pokémon",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/176/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/176/low",
			},


	},



	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	effect: {
		en: "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card