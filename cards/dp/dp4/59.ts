import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-59",
	localId: 59,

	// Card informations
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/59/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/59/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/59/high",
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
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Claw",
			fr: "Griffe coupante",
		},
		text: {
			en: "If your opponent has Seviper in play, this attack does 40 damage plus 50 more damage.",
			fr: "Si votre adversaire a Seviper en jeu, cette attaque inflige 40 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
