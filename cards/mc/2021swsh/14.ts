import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-14",
	localId: 14,

	// Card informations
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 653,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY02/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY02/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY02/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY02/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
