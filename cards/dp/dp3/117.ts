import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-117",
	localId: 117,

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/117/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/117/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 137,
		name: "Satoshi Ohta"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Speed Ball",
			fr: "Balle rapide",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Big Explosion",
			fr: "Grosse explosion",
		},
		text: {
			en: "Voltorb does 50 damage to itself.",
			fr: "Voltorbe s'inflige 50 dégâts.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

