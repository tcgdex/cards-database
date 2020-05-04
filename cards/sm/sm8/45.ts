import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-45",
	localId: 45,

	// Card informations
	name: {
		en: "Houndour",
		fr: "Malosse",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/45/high",
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
			en: "Team Hunt",
			fr: "Chasse en Équipe",
		},
		text: {
			en: "Draw a card for each of your Houndour in play.",
			fr: "Piochez une carte pour chacun de vos Malosse en jeu.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
