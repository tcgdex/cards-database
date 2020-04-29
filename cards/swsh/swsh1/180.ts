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
	localId: 180,


	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/180/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/180/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	effect: {
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can’t use this card during your first turn or on a Basic Pokémon that was put into play this turn.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card