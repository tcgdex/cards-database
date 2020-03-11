import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-67",
	localId: 67,

	// Card informations
	name: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/67/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
