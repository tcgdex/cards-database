import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-28",
	localId: 28,

	// Card informations
	name: {
		en: "Yanma",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 193,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Charge",
		},
		text: {
			en: "Search your deck for up to 4 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swift",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
