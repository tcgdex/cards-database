import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-210",
	localId: 210,

	// Card informations
	name: {
		en: "Team Yell Grunt",
		fr: "Sbire de la Team Yell",
	},






	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "nagimiso",



	effect: {
		en: "Put an Energy attached to 1 of your opponent’s Pokémon into their hand.",
		fr: "Ajoutez à la main de votre adversaire une Énergie attachée à l’un de ses Pokémon.",
	},







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
