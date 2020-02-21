import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-1",
	localId: 1,

	// Card informations
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 102,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/1/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/1/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Loathe",
			fr: "Dégoût",
		},
		text: {
			en: "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
