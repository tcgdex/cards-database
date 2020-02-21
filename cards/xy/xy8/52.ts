import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-52",
	localId: 52,

	// Card informations
	name: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Shock Generator",
			fr: "Générateur de Choc",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
