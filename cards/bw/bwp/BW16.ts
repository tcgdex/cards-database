import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW16",
	localId: "BW16",

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW16/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW16/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Rage",
			fr: "Draco-Rage",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez un côté pile, cette attaque ne fait rien.",
		},
		damage: 50
	}],





	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
