import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Shuckle",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 738,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Hard Shell",
		},
		text: {
			en: "Whenever an attack (including your own) does 40 or less damage to Shuckle (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Shuckle is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Toxic Saliva",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage after each player's turn (even if it was already Poisoned).",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
