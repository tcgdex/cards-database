import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM92",
	localId: "SM92",

	// Card informations
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 787,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM92/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM92/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shining Currents",
			fr: "Courants Scintillants",
		},
		text: {
			en: "If any of your Water Pokémon were healed during this turn, this attack does 60 more damage.",
			fr: "Si l’un de vos Pokémon Water a été soigné pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
