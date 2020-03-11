import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-18",
	localId: 18,

	// Card informations
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 686,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
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
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
