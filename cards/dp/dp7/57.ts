import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-57",
	localId: 57,

	// Card informations
	name: {
		en: "Combee",
		fr: "Combee",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/57/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/57/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/57/high",
		},
	},

	evolveFrom: {
		fr: "Apitrini",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Alert",
			fr: "Alerte",
		},
		text: {
			en: "Draw a card. Then, you may switch Combee with 1 of your Benched Pokémon.",
			fr: "Piochez une carte. Ensuite, vous pouvez échanger Apitrini avec 1 des Pokémon de votre Banc.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
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
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
