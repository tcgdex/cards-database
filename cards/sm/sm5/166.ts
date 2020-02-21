import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-166",
	localId: 166,

	// Card informations
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/166/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/166/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/166/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/166/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
