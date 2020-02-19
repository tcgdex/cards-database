import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-59",
	localId: 59,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/59/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/59/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/59/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Wing",
			fr: "Aile de Fer",
		},
		text: {
			en: "Discard a Metal Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Metal attachée à ce Pokémon.",
		},
		damage: 90
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

