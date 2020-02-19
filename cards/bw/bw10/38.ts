import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-38",
	localId: 38,

	// Card informations
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 482,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/38/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/38/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/38/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trading Places",
			fr: "Permutation",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyjamming",
			fr: "Distribution Psy",
		},
		text: {
			en: "Move as many Special Energy attached to your opponent's Pokémon to your opponent's other Pokémon in any way you like.",
			fr: "Déplacez autant d'Énergies spéciales attachées aux Pokémon de votre adversaire vers d'autres Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

