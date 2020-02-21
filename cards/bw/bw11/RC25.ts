import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC25",
	localId: "RC25",

	// Card informations
	name: {
		en: "Meloetta-EX",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 648,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brilliant Voice",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Round",
		},
		text: {
			en: "Does 30 damage times the number of your Pokémon that have the Round attack.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
