import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW11",
	localId: "BW11",

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
			en: "https://assets.tcgdex.net/en/bw/bwp/BW11/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW11/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
