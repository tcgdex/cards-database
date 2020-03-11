import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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


	evolveFrom: {
		en: "Scyther",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hisao Nakamura",

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
