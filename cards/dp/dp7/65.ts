import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp7/65/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/65/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/65/high.png",
		},
	},

	evolveFrom: {
		fr: "Magicarpe",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

