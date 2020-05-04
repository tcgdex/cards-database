import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-6",
	localId: 6,

	// Card informations
	name: {
		en: "Entei",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 711,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Howl",
		},
		text: {
			en: "When you play Entei from your hand, you may discard the top 5 cards from your deck. (if you have fewer cards in your deck than that, discard all of them.) If any of those are Fire Energy cards, attach them to any of your Fire Pokémon of your choice. Using this power ends your turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Searing Flames",
		},
		text: {
			en: "Discard 2 Energy cards attached to Entei or this attack does nothing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
