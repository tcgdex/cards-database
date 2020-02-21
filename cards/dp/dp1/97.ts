import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-97",
	localId: 97,

	// Card informations
	name: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 273,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/97/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/97/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/97/high",
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
			en: "Bide",
			fr: "Patience",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, if Seedot would be Knocked Out by damage from an attack, Seedot is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Lancez une pièce. Si c'est face, lors du prochain tour de votre adversaire, si Grainipiot doit être mis K.O par des dégâts infligés par une attaque, il n'est pas mis K.O et ses PV restants sont de 10.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
