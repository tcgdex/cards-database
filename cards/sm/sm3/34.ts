import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-34",
	localId: 34,

	// Card informations
	name: {
		en: "Marill",
		fr: "Marill",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 183,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/34/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/34/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Asako Ito",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble",
			fr: "Écume",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
