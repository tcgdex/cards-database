import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-46",
	localId: 46,

	// Card informations
	name: {
		en: "Murkrow",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 198,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a card named Murkrow and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flock Attack",
		},
		text: {
			en: "Flip a number of coins equal to the number of Murkrows on your Bench. This attack does 10 damage plus 10 more damage for each heads.",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
