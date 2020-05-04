import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-12",
	localId: 12,

	// Card informations
	name: {
		en: "Leavanny",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 542,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/12/high",
		},
	},

	evolveFrom: {
		en: "Swadloon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "match",

	abilities: [{
		id: 785,
		type: AbilityType.TALENT,
		name: {
			en: "Leaf Tailor",
		},
		text: {
			en: "Each of your Pokémon that has any Energy attached to it has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Arm",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
