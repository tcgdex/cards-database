import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 667,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
