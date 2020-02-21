import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-124",
	localId: 124,

	// Card informations
	name: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 276,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/124/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/124/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 53,
		name: "Takao Unno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, Taillow's Peck attack's base damage is 30.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Picpic de Nirondelle sont de 30.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
