import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cosmic Spin",
			fr: "Pirouette Cosmique",
		},
		text: {
			en: "If Lunatone is on your Bench, this attack does 30 more damage.",
			fr: "Si Séléroc est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
