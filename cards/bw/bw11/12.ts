import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 28,
		name: "match"
	},

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





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
