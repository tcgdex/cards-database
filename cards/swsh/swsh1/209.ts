import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-209",
	localId: 209,

	// Card informations
	name: {
		en: "Professor's Research (Professor Magnolia)",
		fr: "Recherches Professorales (Professeure Magnolia)",
	},







	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	effect: {
		en: "Discard your hand and draw 7 cards.",
		fr: "Défaussez votre main, puis piochez 7 cartes.",
	},







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
