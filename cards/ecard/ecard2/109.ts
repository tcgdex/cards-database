import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-109",
	localId: 109,

	// Card informations
	name: {
		en: "Smeargle",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/109/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Paint Trick",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. Then, choose 1 of your Benched Pokémon and switch Smeargle with it.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Doubleslap",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
