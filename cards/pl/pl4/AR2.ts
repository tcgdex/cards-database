import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-AR2",
	localId: "AR2",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR2/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR2/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Refresh",
			fr: "Feuille revigorante",
		},
		text: {
			en: "Remove 3 damage counters from each of your Benched Pokémon.",
			fr: "Retirez 3 marqueurs de dégât à chacun des Pokémon de votre Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
