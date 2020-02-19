import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-31",
	localId: 31,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/31/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/31/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/31/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bee March",
			fr: "Marche Apicole",
		},
		text: {
			en: "Search your deck for up to 3 Combee and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 Apitrini dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

