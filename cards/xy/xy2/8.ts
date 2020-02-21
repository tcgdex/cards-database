import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-8",
	localId: 8,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Rosélia",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 315,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/8/high",
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
			Type.GRASS
		],
		name: {
			en: "Sleep Powder",
			fr: "Poudre Dodo",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
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
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
