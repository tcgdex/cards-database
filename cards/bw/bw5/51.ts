import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-51",
	localId: 51,

	// Card informations
	name: {
		en: "Yamask",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 562,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
		},
		text: {
			en: "Flip a coin. If heads, choose a card at random from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
