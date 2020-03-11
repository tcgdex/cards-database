import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-41",
	localId: 41,

	// Card informations
	name: {
		en: "Joltik",
		fr: "Statitik",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 595,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/41/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/41/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Attach",
			fr: "Accrochage",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
