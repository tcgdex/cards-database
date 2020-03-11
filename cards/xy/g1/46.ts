import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Golem-EX",
		fr: "Grolem-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/46/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/46/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 80
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Fall",
			fr: "Chute Mégatonne",
		},
		text: {
			en: "This Pokémon does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige 60 dégâts.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
