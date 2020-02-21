import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-53",
	localId: 53,

	// Card informations
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "High Water",
			fr: "Hautes Eaux",
		},
		text: {
			en: "Attach 2 Water Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez 2 cartes Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swirling Waves",
			fr: "Vagues Tourbillonnantes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
