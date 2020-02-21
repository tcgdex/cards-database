import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM42",
	localId: "SM42",

	// Card informations
	name: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 789,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM42/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM42/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dust Gathering",
			fr: "Ramasse Poussière",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
