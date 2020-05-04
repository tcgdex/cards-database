import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-42",
	localId: 42,

	// Card informations
	name: {
		en: "Erika's Dratini",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 1011,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Strange Barrier",
		},
		text: {
			en: "Whenever an attack by a Basic Pokémon (including your own) does 20 or more damage to Erika's Dratini (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Erika's Dratini is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Strike",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
