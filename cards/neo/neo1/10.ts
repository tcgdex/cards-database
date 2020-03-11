import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Meganium",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/10/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 898,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Herbal Scent",
		},
		text: {
			en: "When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all Grass Pokémon in play.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
