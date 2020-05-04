import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Erika's Ivysaur",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 2,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/41/high",
		},
	},

	evolveFrom: {
		en: "Bulbasaur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 677,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Relaxing Scent",
		},
		text: {
			en: "As long as Erika's Ivysaur is your Active Pokémon, whenever an attack (even your own) does damage to any Pokémon (after applying Weakness and Resistance), that attack only does half the damage to that Pokémon (rounded up to the nearest 10). (Any other effects of attacks still happen.) This power stops working while Erika's Ivysaur is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Double Razor Leaf",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
