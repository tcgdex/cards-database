import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP29",
	localId: "DP29",

	// Card informations
	name: {
		en: "Rhyperior",
	},

	hp: 170,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {
			en: "Hard Crush",
		},
		text: {
			en: "Discard the top 5 cards of your deck. This attack does 50 damage for each Energy card you discarded.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Upthrow",
		},
		text: {
			en: "Search your discard pile for all Fighting Energy cards, show them to your opponent, and shuffle them into your deck.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
