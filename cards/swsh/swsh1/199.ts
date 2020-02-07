import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-199",
	localId: 199,

	// Card informations
	name: {
		en: "Bede",
		fr: "Travis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/199/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/199/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/199/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/199/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 4,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			en: "Attach a basic Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

