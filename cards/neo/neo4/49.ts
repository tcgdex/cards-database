import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-49",
	localId: 49,

	// Card informations
	name: {
		en: "Light Machoke",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/49/high",
		},
	},

	evolveFrom: {
		en: "Machop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Return Home",
		},
		text: {
			en: "If you have any Benched Pokémon, shuffle 1 of them and all cards attached to it into your deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Gentle Kick",
		},
		text: {
			en: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any, this attack does 20 damage.",
		},
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
