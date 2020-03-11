import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP31",
	localId: "DP31",

	// Card informations
	name: {
		en: "Heatran",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 835,
		type: AbilityType.POKEBODY,
		name: {
			en: "Heat Metal",
		},
		text: {
			en: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.",
		}
	}],



	weaknesses: [{
		type: Type.WATER,
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
