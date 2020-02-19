import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Skyarrow Bridge",
		fr: "Pont Sagiciel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/91/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/91/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le coût de Retraite de chaque Pokémon de base en jeu est diminué de Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

