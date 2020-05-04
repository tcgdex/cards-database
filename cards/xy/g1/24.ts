import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Vaporeon-EX",
		fr: "Aquali-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Deep Squall",
			fr: "Rafale Profonde",
		},
		text: {
			en: "This attack does 130 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 130 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
