import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-7",
	localId: 7,

	// Card informations
	name: {
		en: "Combusken",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
		},
		text: {
			en: "Discard a R Energy attached to Combusken.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
