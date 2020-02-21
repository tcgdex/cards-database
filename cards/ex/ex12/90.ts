import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-90",
	localId: 90,

	// Card informations
	name: {
		en: "Regice Star",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 378,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/90/high",
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
			Type.WATER
		],
		name: {
			en: "Ice Barrier",
		},
		text: {
			en: "Prevent all effects of an attack, including damage, done to Regice Star by your opponent's Pokémon-ex during your opponent's next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Final Blizzard",
		},
		text: {
			en: "If your opponent has only 1 Prize card left and Regice Star is the only Pokémon you have in play, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
