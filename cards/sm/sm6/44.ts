import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-44",
	localId: 44,

	// Card informations
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 677,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/44/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/44/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/44/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Teaser",
			fr: "Énergie Provocante",
		},
		text: {
			en: "Move an Energy from 1 of your opponent's Benched Pokémon to another of their Pokémon.",
			fr: "Déplacez une Énergie de l’un des Pokémon de Banc de votre adversaire vers un autre de ses Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

