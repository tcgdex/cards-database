import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-17",
	localId: 17,

	// Card informations
	name: {
		en: "Celebi ex",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 572,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Time Reversal",
		},
		text: {
			en: "Once during your turn, when you put Celebi ex from your hand onto your Bench, you may search your discard pile for a card, show it to your opponent, and put it on top of your deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Shield",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Celebi ex by your opponent's Pokémon",
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
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
