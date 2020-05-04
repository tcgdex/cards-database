import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 265,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/103/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/103/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-venin",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
