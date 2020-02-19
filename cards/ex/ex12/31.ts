import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-31",
	localId: 31,

	// Card informations
	name: {
		en: "Dunsparce",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/31/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 993,
		type: AbilityType.POKEBODY,
		name: {
			en: "Deadlock",
		},
		text: {
			en: "As long as Dunsparce is your Active Pokémon, your opponent's Dunsparce can't attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Down Draw",
		},
		text: {
			en: "Draw 2 cards from the bottom of your deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tripping Turn",
		},
		text: {
			en: "The Defending Pokémon is now Confused. You may switch Dunsparce with 1 of your Benched Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card

