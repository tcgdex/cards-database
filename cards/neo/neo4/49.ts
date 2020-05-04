import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Miki Tanaka",



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





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
