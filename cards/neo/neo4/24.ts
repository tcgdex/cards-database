import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-24",
	localId: 24,

	// Card informations
	name: {
		en: "Light Ledian",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/24/high",
		},
	},

	evolveFrom: {
		en: "Ledyba",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Flash Touch",
		},
		text: {
			en: "If you have any Benched Pokémon, switch 1 of them with Light Ledian. As long as that Pokémon is your Active Pokémon, it can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Comet Punch",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
