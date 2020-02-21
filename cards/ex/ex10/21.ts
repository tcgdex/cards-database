import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-21",
	localId: 21,

	// Card informations
	name: {
		en: "Cleffa",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Eeeeeeek",
		},
		text: {
			en: "Shuffle your hand into your deck, then draw 6 cards.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
