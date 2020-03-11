import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "si1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Togepi",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 175,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiko Fukuyama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bawl",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
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
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
