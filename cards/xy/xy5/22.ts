import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-22",
	localId: 22,

	// Card informations
	name: {
		en: "Slugma",
		fr: "Limagma",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 218,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Grass Fire",
			fr: "Feu de Brousse",
		},
		text: {
			en: "Discard a Grass Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie Grass attachée au Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
