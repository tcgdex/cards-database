import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-75",
	localId: 75,

	// Card informations
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/75/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/75/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/75/high",
		},
	},

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal'Korne",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
