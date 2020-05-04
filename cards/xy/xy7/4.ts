import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-4",
	localId: 4,

	// Card informations
	name: {
		en: "Bellossom",
		fr: "Joliflor",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 182,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/4/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Windmill",
			fr: "Moulin à Vent",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Flower Tornado",
			fr: "Floramixeur",
		},
		text: {
			en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
