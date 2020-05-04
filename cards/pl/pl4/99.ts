import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-99",
	localId: 99,

	// Card informations
	name: {
		en: "Tangrowth",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 187,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Healing Growth",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 4 damage counters from 1 of your Pokémon. This power can't be used if Tangrowth is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Big Growth",
		},
		text: {
			en: "Search your discard pile for as many Grass Energy cards as you like and attach them to your Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
