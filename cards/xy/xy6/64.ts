import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-64",
	localId: 64,

	// Card informations
	name: {
		en: "Zekrom",
		fr: "Zekrom",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 644,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/64/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/64/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/64/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Stream",
			fr: "Courant d'Énergie",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

