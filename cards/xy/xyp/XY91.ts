import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY91",
	localId: "XY91",

	// Card informations
	name: {
		en: "Champions Festival",
		fr: "Festival des Champions",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, si ce joueur a 6 Pokémon en jeu, il peut soigner 10 dégâts à chacun de ses Pokémon.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
