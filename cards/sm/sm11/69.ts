import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-69",
	localId: 69,

	// Card informations
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Nature Dive",
			fr: "Piqué Naturel",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Ultra Beast, this attack does 100 more damage, and discard 2 Energy from this Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, cette attaque inflige 100 dégâts supplémentaires et vous défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
