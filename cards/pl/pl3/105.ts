import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-105",
	localId: 105,

	// Card informations
	name: {
		en: "Geodude",
		fr: "Racaillou",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/105/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/105/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Knuckle Punch",
			fr: "Coud'phalange",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Focus Fist",
			fr: "Poing concentré",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
