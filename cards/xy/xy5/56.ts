import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-56",
	localId: 56,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/56/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/56/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Deep Sea Swirl",
			fr: "Remous Abyssal",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Life Saver",
			fr: "Sauvetage",
		},
		text: {
			en: "Put 2 Water Pokémon from your discard pile into your hand.",
			fr: "Ajoutez 2 Pokémon Water de votre pile de défausse à votre main.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
