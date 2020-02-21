import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-57",
	localId: 57,

	// Card informations
	name: {
		en: "Grimer",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Gas",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Sticky Hands",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed; if tails, this attack does 10 damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
