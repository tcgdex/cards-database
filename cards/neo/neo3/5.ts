import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-5",
	localId: 5,

	// Card informations
	name: {
		en: "Delibird",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/5/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Present",
		},
		text: {
			en: "Flip 3 coins. If exactly 1 is heads, this attack does 40 damage. If exactly 2 are heads, remove 3 damage counters from the Defending Pokémon. If the Defending Pokémon has fewer damage counters than that, remove all of them. If all 3 are heads, this attack does 60 damage. If all 3 are tails, remove all damage counters from the Defending Pokémon.",
		},
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
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
