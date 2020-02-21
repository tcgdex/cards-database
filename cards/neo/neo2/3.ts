import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-3",
	localId: 3,

	// Card informations
	name: {
		en: "Hitmontop",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Detect",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Hitmontop.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Triple Kick",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 times the number of heads.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
