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
	localId: 183,


	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/183/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/183/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Studio Bora Inc.",



	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card