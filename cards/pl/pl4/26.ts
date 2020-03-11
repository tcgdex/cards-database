import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-26",
	localId: 26,

	// Card informations
	name: {
		en: "Porygon-Z G",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nobuyuki Fujimoto",

	abilities: [{
		id: 474,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dowsing Code",
		},
		text: {
			en: "Once during your turn, when you put Porygon-Z from your hand onto your Bench, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and shuffle them into your deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
