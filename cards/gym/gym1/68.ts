import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Brock's Mankey",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/68/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Fidget",
		},
		text: {
			en: "Shuffle your deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Karate Chop",
		},
		text: {
			en: "Does 40 damage minus 10 damage for each damage counter on Brock's Mankey.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
