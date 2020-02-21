import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-79",
	localId: 79,

	// Card informations
	name: {
		en: "Bisharp",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/79/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerial Ace",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
