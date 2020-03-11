import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-10",
	localId: 10,

	// Card informations
	name: {
		en: "Dark Typhlosion",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/10/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Claw Swipe",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Rushing Flames",
		},
		text: {
			en: "You may discard any number of Energy cards attached to your Pokémon. Flip a coin for each Energy card discarded in this way. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
