import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-110",
	localId: 110,

	// Card informations
	name: {
		en: "Sneasel",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 215,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Rob",
		},
		text: {
			en: "Look at your opponent's hand. Choose all Technical Machine and Pokémon Tool cards there and put them into his or her deck. Your opponent shuffles the deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
