import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-92",
	localId: 92,

	// Card informations
	name: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 629,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/92/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/92/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
