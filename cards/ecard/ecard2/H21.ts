import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H21",
	localId: "H21",

	// Card informations
	name: {
		en: "Scizor",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H21/high.png",
		},
	},

	evolveFrom: {
		en: "Scyther",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 282,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Resistance",
		},
		text: {
			en: "Scizor can't be Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Snatch",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon with no damage counters on it and snatch the Defending Pokémon with it.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Metal",
		},
		text: {
			en: "Flip a number of coins equal to the number of Metal Energy attached to Scizor. This attack does 30 damage plus 20 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

