import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-31",
	localId: 31,

	// Card informations
	name: {
		en: "Plusle",
		fr: "Posipi",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Positive Hand",
			fr: "Main Positive",
		},
		text: {
			en: "Discard a basic Energy card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte Énergie de base de votre main. Dans ce cas, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electric Tail",
			fr: "Électro-Queue",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
