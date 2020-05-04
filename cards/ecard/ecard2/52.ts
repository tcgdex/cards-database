import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Magnemite",
	},

	hp: 40,

	type: [
		Type.METAL,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin-ichi Yoshida",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Attract",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
