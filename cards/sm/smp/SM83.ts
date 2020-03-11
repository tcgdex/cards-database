import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM83",
	localId: "SM83",

	// Card informations
	name: {
		en: "Zorua",
		fr: "Zorua",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 570,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM83/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM83/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kodama",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
