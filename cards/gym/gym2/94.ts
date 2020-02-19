import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-94",
	localId: 94,

	// Card informations
	name: {
		en: "Sabrina's Abra",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 63,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/94/high.png",
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
			Type.PSYCHIC
		],
		name: {
			en: "Psyscan",
		},
		text: {
			en: "Look at your opponent's hand.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card

