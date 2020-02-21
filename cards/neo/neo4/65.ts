import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-65",
	localId: 65,

	// Card informations
	name: {
		en: "Gastly",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Nightmare",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
