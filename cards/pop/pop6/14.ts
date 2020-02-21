import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop6-14",
	localId: 14,

	// Card informations
	name: {
		en: "Chimchar",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 390,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop6/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop6/14/high",
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
		name: {
			en: "Scratch",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 6",
		code: "pop6"
	}
}

export default card
