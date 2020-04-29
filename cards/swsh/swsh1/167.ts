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
	localId: 167,


	// Card informations
	name: {
		en: "Lucky Egg",
		fr: "Œuf Chance",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/167/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/167/low",
			},


	},



	tags: [
		Tag.TOOL,
	],

	illustrator: "Studio Bora Inc.",



	effect: {
		en: "If the Pokémon this card is attached to is Knocked Out by damage from an opponent’s attack, draw cards until you have 7 cards in your hand.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card