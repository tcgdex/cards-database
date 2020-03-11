import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-5",
	localId: 5,

	// Card informations
	name: {
		en: "Exeggutor",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/5/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psychic Exchange",
		},
		text: {
			en: "Shuffle your hand into your deck. Draw up to 8 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Big Eggsplosion",
		},
		text: {
			en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
