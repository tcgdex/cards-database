import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-6",
	localId: 6,

	// Card informations
	name: {
		en: "Kabutops",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/6/high.png",
		},
	},

	evolveFrom: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hydrocutter",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can't flips more than 3 coins in this way.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card

