import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-70",
	localId: 70,

	// Card informations
	name: {
		en: "Weezing",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/70/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Foul Gas",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Misfire",
		},
		text: {
			en: "Flip a coin. If tails, put 6 damage counters on Weezing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
