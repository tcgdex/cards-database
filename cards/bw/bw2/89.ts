import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Tornadus",
		fr: "Boréas",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 641,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Wheel",
			fr: "Roue d'Énergie",
		},
		text: {
			en: "Move an Energy from 1 of your Benched Pokémon to this Pokémon.",
			fr: "Déplacez une Énergie de l'un de vos Pokémon de Banc vers ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane",
			fr: "Vent Violent",
		},
		text: {
			en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de base de ce Pokémon vers 1 de vos Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
