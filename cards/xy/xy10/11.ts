import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-11",
	localId: 11,

	// Card informations
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 653,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Invite Out",
			fr: "Invitation à Sortir",
		},
		text: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
