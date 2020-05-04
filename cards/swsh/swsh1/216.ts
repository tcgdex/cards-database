import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-216",
	localId: 216,

	// Card informations
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},







	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "sadaji",



	effect: {
		en: "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main.\n\nCherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
	},







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
