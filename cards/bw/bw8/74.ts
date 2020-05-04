import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-74",
	localId: 74,

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
			en: "https://assets.tcgdex.net/en/bw/bw8/74/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/74/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouji Tajima",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Heat Burn",
			fr: "Chaleur Brûlante",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Explosion",
			fr: "Explosion",
		},
		text: {
			en: "This Pokémon does 90 damage to itself.",
			fr: "Ce Pokémon s'inflige 90 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
