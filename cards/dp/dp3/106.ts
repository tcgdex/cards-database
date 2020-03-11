import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-106",
	localId: 106,

	// Card informations
	name: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 422,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/106/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/106/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shell Hunting",
			fr: "Chasse au coquillage",
		},
		text: {
			en: "Search your deck for up to 2 in any combination of Shellos West Sea and Shellos East Sea and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une combinaison de jusqu'à 2 Sancoki Mer Occident\net Sancoki Mer Orient et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sprinkle Water",
			fr: "Eau aspergeante",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
