import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP14",
	localId: "DP14",

	// Card informations
	name: {
		en: "Chatot",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 441,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Me First",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tone-Deaf",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
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
