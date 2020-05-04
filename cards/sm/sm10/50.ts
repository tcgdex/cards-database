import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-50",
	localId: 50,

	// Card informations
	name: {
		en: "Kyurem",
		fr: "Kyurem",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/50/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/50/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call Forth Cold",
			fr: "Appel au Froid",
		},
		text: {
			en: "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hail Prison",
			fr: "Prison de Grêle",
		},
		text: {
			en: "Discard 2 Water Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Défaussez 2 Énergies Water de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
