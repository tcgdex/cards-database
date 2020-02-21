import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-78",
	localId: 78,

	// Card informations
	name: {
		en: "Meowth",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 75,
		name: "Keiko Fukuyama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sudden Swipe",
		},
		text: {
			en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Energy cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
