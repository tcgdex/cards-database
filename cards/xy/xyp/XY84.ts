import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY84",
	localId: "XY84",

	// Card informations
	name: {
		en: "Pikachu-EX",
		fr: "Pikachu-EX",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Tail",
			fr: "Queue de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overspark",
		},
		text: {
			en: "Discard all Lightning Energy attached to this Pokémon. This attack does 50 damage times the number of Energy cards you discarded.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
