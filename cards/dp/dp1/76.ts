import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 390,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/76/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/76/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Ouisticram.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
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
