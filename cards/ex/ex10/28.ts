import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-28",
	localId: 28,

	// Card informations
	name: {
		en: "Jynx",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/28/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 66,
		type: AbilityType.POKEBODY,
		name: {
			en: "Stages of Evolution",
		},
		text: {
			en: "As long as Jynx is an Evolved Pokémon, prevent all effects of opponent's attacks, except damage, done to Jynx, and Jynx has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Freeze Light",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned.",
		},
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Pure Power",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

