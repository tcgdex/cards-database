import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
