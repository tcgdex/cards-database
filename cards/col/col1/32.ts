import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Slowking",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/32/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 708,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Second Sight",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 3 cards of either player's deck and put them back on top of that player's deck in any order. This power can't be used if Slowking is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyshock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
