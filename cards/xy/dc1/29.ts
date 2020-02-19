import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Team Magma Admin",
		fr: "Admin Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/29/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/29/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/29/high.png",
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
			fr: "Ajoutez jusqu'à 3 Pokémon de la Team Magma de votre pile de défausse à votre main.",
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

