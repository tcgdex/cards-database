import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW80",
	localId: "BW80",

	// Card informations
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW80/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW80/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW80/high",
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
			en: "Taunt",
			fr: "Provoc",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Boost Claw",
			fr: "Griffoboost",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 30 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
