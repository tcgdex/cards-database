import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-105",
	localId: 105,

	// Card informations
	name: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 90,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/105/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/105/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/105/high",
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
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shell Rest",
			fr: "Repos coquillage",
		},
		text: {
			en: "Remove 2 damage counters from Shellder.",
			fr: "Retirez à Kokiyas 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Tongue Slap",
			fr: "Gros coup de langue",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
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
