import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC2",
	localId: "RC2",

	// Card informations
	name: {
		en: "Shroomish",
		fr: "Balignon",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 285,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC2/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC2/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Worry Seed",
			fr: "Soucigraine",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
