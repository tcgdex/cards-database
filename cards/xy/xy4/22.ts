import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-22",
	localId: 22,

	// Card informations
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 594,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Super Deep Dive",
			fr: "Super Gros Plongeon",
		},
		text: {
			en: "Heal 30 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
