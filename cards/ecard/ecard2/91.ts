import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Magnemite",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 860,
		type: AbilityType.POKEBODY,
		name: {
			en: "Conductive Body",
		},
		text: {
			en: "You pay Colorless less to retreat Magnemite for each Magnemite on your Bench.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Bomb",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, Magnemite does 10 damage to itself.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
