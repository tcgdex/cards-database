import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-81",
	localId: 81,

	// Card informations
	name: {
		en: "Wooper",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Saturation",
		},
		text: {
			en: "When you attach a Water Energy card from your hand to Wooper, remove all Special Conditions and 1 damage counter from Wooper.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
