import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-40",
	localId: 40,

	// Card informations
	name: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 502,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/40/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/40/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/40/high",
		},
	},

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
