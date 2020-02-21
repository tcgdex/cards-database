import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-56",
	localId: 56,

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
			en: "https://assets.tcgdex.net/en/neo/neo4/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charm",
		},
		text: {
			en: "If the Defending Pokémon attacks during your opponent's next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Ball Tackle",
		},
		text: {
			en: "Togepi does 10 damage to itself.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
