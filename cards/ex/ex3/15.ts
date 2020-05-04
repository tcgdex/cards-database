import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Flygon",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/15/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 137,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sand Guard",
		},
		text: {
			en: "Whenever Flygon would be damaged by your opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 20.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy card attached to Flygon.",
		},
		damage: 60
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
