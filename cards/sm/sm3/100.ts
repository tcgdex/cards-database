import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land Crush",
			fr: "Écras’Terre",
		},
		damage: 80
	},{
		cost: [
			Type.DARKNESS,
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Core Enforcer",
			fr: "Sanction Suprême",
		},
		text: {
			en: "Discard a Darkness Energy and a Fairy Energy from this Pokémon.",
			fr: "Défaussez une Énergie Darkness et une Énergie Fairy de ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
