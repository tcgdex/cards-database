import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-23",
	localId: 23,

	// Card informations
	name: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 90,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/23/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/23/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/23/high",
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Clamp",
			fr: "Claquoir",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
