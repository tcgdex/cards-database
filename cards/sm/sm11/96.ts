import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-96",
	localId: 96,

	// Card informations
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 747,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
