import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-52",
	localId: 52,

	// Card informations
	name: {
		en: "Light Vaporeon",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/52/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wash Away",
		},
		text: {
			en: "If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hypno Shower",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent's) with any damage counters on it.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
