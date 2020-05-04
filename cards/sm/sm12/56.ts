import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-56",
	localId: 56,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/56/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/56/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/56/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Recall",
			fr: "Récupération",
		},
		text: {
			en: "Choose an attack from 1 of this Pokémon's previous Evolutions and use it as this attack.",
			fr: "Choisissez une attaque de l’une des précédentes Évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aquafall",
			fr: "Aquasplash",
		},
		text: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
