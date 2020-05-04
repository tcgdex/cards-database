import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-237",
	localId: 237,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/237/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/237/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/237/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/237/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryota Murayama",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Fling",
			fr: "Dégommage Feu",
		},
		text: {
			en: "Put 4 {R} Energy cards from your discard pile into your hand.",
			fr: "Ajoutez 4 cartes Énergie Fire de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Kindle",
			fr: "Enflammer",
		},
		text: {
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
