import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Misdreavus",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/11/high",
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
			Type.PSYCHIC
		],
		name: {
			en: "Night Eyes",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Perish Song",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, and was attacked with Night Eyes during your last turn, it is Knocked Out.",
		},
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
