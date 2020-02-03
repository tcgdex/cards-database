import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV88",
	localId: "SV88",

	// Card informations
	name: {
		en: "Brooklet Hill",
		fr: "Colline Clapotis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV88/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV88/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher un Pokémon Water de base ou un Pokémon Fighting de base dans son deck, le placer sur son Banc, puis mélanger son deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

