import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-189",
	localId: 189,

	// Card informations
	name: {
		en: "Lapras V",
		fr: "Lokhlass V",
	},

	hp: 210,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/189/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/189/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/189/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/189/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {
			en: "V rule",
			fr: "Règle V",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Body Surf",
			fr: "Body Surf",
		},
		text: {
			en: "Attach a Water Energy card from your hand to this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Water de votre main à ce Pokémon. Dans ce cas, échangez-le contre l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ocean Loop",
			fr: "Boucle Océanique",
		},
		text: {
			en: "Put 2 Water Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
		},
		damage: 210
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

