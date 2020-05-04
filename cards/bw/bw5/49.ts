import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-49",
	localId: 49,

	// Card informations
	name: {
		en: "Slowking",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/49/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psy Bolt",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hand Press",
		},
		text: {
			en: "If you have more cards in your hand than your opponent, this attack does 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
