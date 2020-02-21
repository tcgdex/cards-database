import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-4",
	localId: 4,

	// Card informations
	name: {
		en: "Feraligatr",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/4/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 111,
		type: AbilityType.POKEBODY,
		name: {
			en: "Intimidating Fang",
		},
		text: {
			en: "As long as Feraligatr is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Pull Away",
		},
		text: {
			en: "If your opponent has 5 or more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tonnage",
		},
		text: {
			en: "You may do 50 damage plus 30 more damage. If you do, Feraligatr does 30 damage to itself.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
