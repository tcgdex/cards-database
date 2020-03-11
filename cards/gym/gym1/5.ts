import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Erika's Vileplume",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/5/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 1002,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Pollen Defense",
		},
		text: {
			en: "If an attack does damage to Erika's Vileplume while it's your Active Pokémon (even if it's Knocked Out), flip a coin. If heads, your opponent's Active Pokémon is now Confused. This power works even while Erika's Vileplume is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Mega Drain",
		},
		text: {
			en: "If Erika's Vileplume does damage to the Defending Pokémon (after applying Weakness and Resistance), remove a number of damage counters from Erika's Vileplume equal to half the damage done to the Defending Pokémon (rounded up to the nearest 10). If Erika's Vileplume has fewer damage counters than that, remove all of them.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
