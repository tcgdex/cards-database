import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-72",
	localId: 72,

	// Card informations
	name: {
		en: "Slowpoke",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fishing Tail",
		},
		text: {
			en: "Search your discard pile for a Basic Pokémon, Evolution card, or basic Energy card, show it to your opponent, and put it into your hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trip Over",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
