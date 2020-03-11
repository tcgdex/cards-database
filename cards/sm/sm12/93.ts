import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-93",
	localId: 93,

	// Card informations
	name: {
		en: "Phantump",
		fr: "Brocélôme",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 708,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "miki kudo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mumble",
			fr: "Murmure",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
