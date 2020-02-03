import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Corphish",
		fr: "Écrapince",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 341,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/100/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/100/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-masse",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sharp Pincers",
			fr: "Pinces pointues",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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

