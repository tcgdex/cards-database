import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Houndoom",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/14/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smokescreen",
		},
		text: {
			en: "If the defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Burn Up",
		},
		text: {
			en: "Flip a coin. If tails, discard all Energy cards attached to Houndoom.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
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
