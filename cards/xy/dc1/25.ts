import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Team Aqua Admin",
		fr: "Admin Team Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/25/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/25/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 110,
		name: "GAME FREAK inc."
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à votre Pokémon Actif de la Team Aqua.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

