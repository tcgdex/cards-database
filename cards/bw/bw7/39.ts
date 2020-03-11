import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-39",
	localId: 39,

	// Card informations
	name: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 501,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/39/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/39/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Seashell Attack",
			fr: "Carap'Attaque",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
