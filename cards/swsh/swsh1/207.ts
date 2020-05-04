import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-207",
	localId: 207,

	// Card informations
	name: {
		en: "Bede",
		fr: "Travis",
	},








	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	effect: {
		en: "Attach a basic Energy card from your hand to 1 of your Benched Pokémon.",
		fr: "Attachez une carte Énergie de base de votre main à l’un de vos Pokémon de Banc.",
	},







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
