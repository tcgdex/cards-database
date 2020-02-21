import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-13",
	localId: 13,

	// Card informations
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 664,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "String Shot",
			fr: "Sécrétion",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
