import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-108",
	localId: 108,

	// Card informations
	name: {
		en: "Torchic Star",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 255,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fireworks",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy card attached to Torchic Star.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Spring Back",
		},
		text: {
			en: "If your opponent has only 1 Prize card left, this attack does 20 damage plus 50 more damage and the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
