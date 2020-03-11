import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-36",
	localId: 36,

	// Card informations
	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/36/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/36/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {
			en: "Present",
			fr: "Cadeau",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Ball",
			fr: "Ball'glace",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
