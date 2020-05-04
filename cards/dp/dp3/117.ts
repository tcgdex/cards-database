import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/117/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/117/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Satoshi Ohta",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
