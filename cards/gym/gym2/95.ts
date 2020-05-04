import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Sabrina's Drowzee",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 96,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Support",
		},
		text: {
			en: "Search your deck for a Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
		},
		text: {
			en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
