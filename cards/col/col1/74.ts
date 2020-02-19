import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-74",
	localId: 74,

	// Card informations
	name: {
		en: "Totodile",
		fr: "Kaiminus",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 158,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/74/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/74/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/74/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/74/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Tail",
			fr: "Hydroqueue",
		},
		text: {
			en: "Flip a coin for each Water Energy attached to Totodile. This attack does 30 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Water attachée à Kaiminus. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card

