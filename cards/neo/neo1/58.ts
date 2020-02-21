import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Girafarig",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Agility",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Girafarig.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psybeam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
