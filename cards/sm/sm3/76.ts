import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 745,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/76/high",
		},
	},

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Accelerock",
			fr: "Vif Roc",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
