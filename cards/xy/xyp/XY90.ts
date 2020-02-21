import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY90",
	localId: "XY90",

	// Card informations
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY90/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY90/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 186,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Summoning Draw",
			fr: "Pioche Invocatoire",
		},
		text: {
			en: "If Pikachu is on your Bench, draw 3 cards.",
			fr: "Si Pikachu est sur votre Banc, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Spin",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
