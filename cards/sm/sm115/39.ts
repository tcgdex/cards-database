import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-39",
	localId: 39,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Pound",
			fr: "Écras’Face",
		},
		damage: 10
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Moon Dance",
			fr: "Danse à la Lune",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
