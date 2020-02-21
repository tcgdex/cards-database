import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Slakoth",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Claw",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slack Off",
		},
		text: {
			en: "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
