import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP46",
	localId: "DP46",

	// Card informations
	name: {
		en: "Garchomp C",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 204,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Healing Breath",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Garchomp  LV.X from your hand onto your Active Garchomp , you may remove all damage counters from each of your Pokémon SP.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Rush",
		},
		text: {
			en: "Discard 2 Energy attached to Garchomp . Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp  can't use Dragon Rush during your next turn.",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
