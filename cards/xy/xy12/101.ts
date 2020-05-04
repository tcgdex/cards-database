import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-101",
	localId: 101,

	// Card informations
	name: {
		en: "M Charizard-EX",
		fr: "M-Dracaufeu-EX",
	},

	hp: 220,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/101/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/101/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/101/high",
		},
	},

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crimson Dive",
			fr: "Plongeon Écarlate",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
			fr: "Ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
