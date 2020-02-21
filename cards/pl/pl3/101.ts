import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-101",
	localId: 101,

	// Card informations
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/101/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/101/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing en tire-bouchon",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
