import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-60",
	localId: 60,

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
			en: "https://assets.tcgdex.net/en/ex/ex2/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Strike and Run",
		},
		text: {
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward. You may switch Dunsparce with 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sudden Flash",
		},
		text: {
			en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
