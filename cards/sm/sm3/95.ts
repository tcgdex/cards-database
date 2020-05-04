import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 742,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
