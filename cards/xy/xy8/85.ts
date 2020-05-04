import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-85",
	localId: 85,

	// Card informations
	name: {
		en: "Meloetta",
		fr: "Meloetta",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 648,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Accelerating Spin",
			fr: "Rotation Accélérée",
		},
		text: {
			en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon. Then, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon. Ensuite, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prima Rondo",
			fr: "Rondo Dansant",
		},
		text: {
			en: "If this Pokémon has any Psychic Energy attached to it, this attack does 50 more damage.",
			fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
