import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-120",
	localId: 120,

	// Card informations
	name: {
		en: "Brooklet Hill",
		fr: "Colline Clapotis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/120/high",
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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
