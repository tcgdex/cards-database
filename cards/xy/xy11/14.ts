import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-14",
	localId: 14,

	// Card informations
	name: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 636,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
