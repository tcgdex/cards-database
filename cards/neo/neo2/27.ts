import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-27",
	localId: 27,

	// Card informations
	name: {
		en: "Politoed",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 186,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/27/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 653,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Frog Song",
		},
		text: {
			en: "Whenever Politoed's attack damages the Defending Pokémon (after applying Weakness and Resistance), if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play (including your opponent's), that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Doubleslap",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 times the number of heads.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
