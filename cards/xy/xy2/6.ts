import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-6",
	localId: 6,

	// Card informations
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/6/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/6/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/6/high",
		},
	},

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
