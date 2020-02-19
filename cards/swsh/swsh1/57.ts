import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-57",
	localId: 57,

	// Card informations
	name: {
		en: "Drizzile",
		fr: "Arrozard",
	},

	hp: 90,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/57/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/57/low.png",
		}
	},

	evolveFrom: {
		en: "Sobble",
		fr: "Larméléon",
	},

	evolveTo: [{
		en: "Inteleon",
		fr: "Lézargus",
	}],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 26,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
