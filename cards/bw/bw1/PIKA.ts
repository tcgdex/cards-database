import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-PIKA",
	localId: "PIKA",

	// Card informations
	name: {
		fr: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/bw/bw1/PIKA/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/bw/bw1/PIKA/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			fr: "Énergisant",
		},
		text: {
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Tonnerre",
		},
		text: {
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Noir & Blanc",
		code: "bw1"
	}
}

export default card
