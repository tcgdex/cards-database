import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-56",
	localId: 56,

	// Card informations
	name: {
		en: "Cherubi",
		fr: "Cherubi",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 420,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/56/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/56/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/56/high",
		},
	},

	evolveFrom: {
		fr: "Ceribou",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		name: {
			en: "Nap",
			fr: "Tit'sieste",
		},
		text: {
			en: "Remove 2 damage counters from Cherubi.",
			fr: "Retirez à Ceribou 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bullet Seed",
			fr: "Balle graine",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
