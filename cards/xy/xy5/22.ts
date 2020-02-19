import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy5/22/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/22/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/22/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

