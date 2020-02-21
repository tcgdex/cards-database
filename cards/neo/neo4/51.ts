import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-51",
	localId: 51,

	// Card informations
	name: {
		en: "Light Slowbro",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/51/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Fish Out",
		},
		text: {
			en: "Your opponent may choose up to 3 Baby Pokémon, Basic Pokémon, and/or Evolution cards from his or her discard pile and shuffle them into his or her deck. Either way, you may do the same.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Slash About",
		},
		text: {
			en: "If there are more Energy cards attached to the Defending Pokémon than to Light Slowbro, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
