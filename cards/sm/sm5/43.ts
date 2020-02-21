import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-43",
	localId: 43,

	// Card informations
	name: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 125,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/43/high",
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
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
