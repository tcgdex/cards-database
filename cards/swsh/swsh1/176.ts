import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-176",
	localId: 176,

	// Card informations
	name: {
		en: "Pokémon Center Lady",
		fr: "Dame du Centre Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/176/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/176/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 29,
		name: "kirisAki"
	},



	effect: {
		en: "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.",
		fr: "Soignez 60 dégâts de l’un de vos Pokémon, et il guérit de tous les États Spéciaux.",
	},







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
