import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Dark Crobat",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/2/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE2,
	],



	abilities: [{
		id: 592,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Surprise Bite",
		},
		text: {
			en: "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage do that Pokémon. (Don't apply Weakness and Resistance.)",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Dark Drain",
		},
		text: {
			en: "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
