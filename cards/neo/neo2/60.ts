import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-60",
	localId: 60,

	// Card informations
	name: {
		en: "Omanyte",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 189,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fossil",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from Mysterious Fossil and put it on your Bench. Shuffle your deck afterward. Treat that card as a Basic Pokémon. This power can't be used if Omanyte is Asleep, Confused, or Paralyzed (or if your Bench is full).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bind",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
