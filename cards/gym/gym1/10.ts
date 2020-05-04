import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Misty's Tentacruel",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/10/high",
		},
	},

	evolveFrom: {
		en: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 1004,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flee",
		},
		text: {
			en: "If an attack does damage to Misty's Tentacruel while it's your Active Pokémon, you may switch it with 1 of your Benched Pokémon, which prevents all other effects of that attack on Misty's Tentacruel. This power can't be used if Misty's Tentacruel is already Asleep, Confused, or Paralyzed.",
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
			en: "Jellyfish Poison",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
