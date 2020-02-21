import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-14",
	localId: 14,

	// Card informations
	name: {
		en: "Litwick",
		fr: "Funécire",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 607,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/14/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/14/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
			fr: "Roussi",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
