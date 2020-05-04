import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-65",
	localId: 65,

	// Card informations
	name: {
		en: "Magikarp",
		fr: "Magikarp",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/65/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/65/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/65/high",
		},
	},

	evolveFrom: {
		fr: "Magicarpe",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		name: {
			en: "Sea Spray",
			fr: "Spray de mer",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, draw a card.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, piochez une carte.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
