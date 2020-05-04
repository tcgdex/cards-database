import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/83/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/83/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Lee HyunJung",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Pierre Lune",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Mélofée peut évoluer lors du tour où il est joué.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Torgnoles",
		},
		text: {
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: "10×"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
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
