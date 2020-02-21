import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-60",
	localId: 60,

	// Card informations
	name: {
		en: "Flareon 4",
		fr: "Pyroli  Niv. 55",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/60/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/60/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/60/high",
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
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Tail Slap",
			fr: "Coup de queue enflammé",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Flareon .",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Pyroli .",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
