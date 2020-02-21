import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "si1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Primeape",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/18/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Low Kick",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rampage",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Primeape. Flip a coin. If tails, Primeape is now Confused (after doing damage).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
