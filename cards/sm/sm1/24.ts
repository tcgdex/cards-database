import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Litten",
		fr: "Flamiaou",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 725,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/24/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/24/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
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

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
