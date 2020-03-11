import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Erika's Victreebel",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/26/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 698,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fragrance Trap",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon. This power can't be used if Erika's Victreebel is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 50
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
