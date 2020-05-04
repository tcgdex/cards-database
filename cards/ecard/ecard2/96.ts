import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-96",
	localId: 96,

	// Card informations
	name: {
		en: "Nidoran♂",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiko Fukuyama",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Horn",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
