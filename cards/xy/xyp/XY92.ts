import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY92",
	localId: "XY92",

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Hunt",
			fr: "Stop Θ",
		},
		text: {
			en: "Flip 3 coins. For each heads, attach a basic Energy card from your discard pile to your Benched Pokémon-EX in any way you like.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
		},
		damage: 20
	}],





	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
