import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-121",
	localId: 121,

	// Card informations
	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 567,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/121/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/121/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/121/high",
		},
	},

	evolveFrom: {
		en: "Archen",
		fr: "Arkéapti",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "U-turn",
			fr: "Demi-Tour",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
