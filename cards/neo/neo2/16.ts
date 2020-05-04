import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Wobbuffet",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Counter",
		},
		text: {
			en: "If an attack damages Wobbuffet during your opponent's next turn (even if Wobbuffet is knocked out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
