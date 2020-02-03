import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-SH4",
	localId: "SH4",

	// Card informations
	name: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 270,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/SH4/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/SH4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/SH4/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/SH4/high.png",
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

	abilities: [{
		id: 1123,
		type: AbilityType.POKEBODY,
		name: {
			en: "Swift Swim",
			fr: "Glissade",
		},
		text: {
			en: "If Lotad has any Water Energy attached to it, Lotad's Retreat Cost is 0.",
			fr: "Si Nénupiot possède de l'Énergie Water, son coût de retraite est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Blot",
			fr: "Pâté",
		},
		text: {
			en: "Remove 1 damage counter from Lotad.",
			fr: "Retirez à Nénupiot 1 marqueur de dégât.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Jump On",
			fr: "Sauter",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

