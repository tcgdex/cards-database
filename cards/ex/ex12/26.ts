import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-26",
	localId: 26,

	// Card informations
	name: {
		en: "Spinda",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 327,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 114,
		name: "Motofumi Fujiwara"
	},

	abilities: [{
		id: 769,
		type: AbilityType.POKEBODY,
		name: {
			en: "Pattern Distraction",
		},
		text: {
			en: "As long as Spinda is your Active Pokémon, whenever your opponent's Basic Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. You can't use more than 1 Pattern Distraction Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Whimsy Draw",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, draw 2 cards.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Flip a coin. If tails, Spinda does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
