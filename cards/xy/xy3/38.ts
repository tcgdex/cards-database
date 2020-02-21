import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-38",
	localId: 38,

	// Card informations
	name: {
		en: "Skorupi",
		fr: "Rapion",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 451,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
