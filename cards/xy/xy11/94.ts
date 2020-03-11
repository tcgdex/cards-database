import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-94",
	localId: 94,

	// Card informations
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 661,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/94/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/94/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
