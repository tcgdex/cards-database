import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-18",
	localId: 18,

	// Card informations
	name: {
		en: "Totodile",
		fr: "Kaiminus",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 158,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Fury Strikes",
			fr: "Attaques Furieuses",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
