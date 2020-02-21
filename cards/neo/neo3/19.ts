import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Kingdra",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/19/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Genetic Memory",
		},
		text: {
			en: "Use any attack from Kingdra's Basic Pokémon card or Evolution card. (Kingdra doesn't have to pay for that attack's Energy cost.)",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twister",
		},
		text: {
			en: "Flip 2 coins. For each heads, choose an Energy card attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing (not even damage).",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
