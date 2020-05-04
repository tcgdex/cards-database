import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW14",
	localId: "BW14",

	// Card informations
	name: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 511,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW14/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW14/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bullet Seed",
			fr: "Balle Graine",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
