import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-AR6",
	localId: "AR6",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR6/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR6/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Turn",
			fr: "Tour éclair",
		},
		text: {
			en: "Switch Arceus with 1 of your Benched Pokémon.",
			fr: "Échangez Arceus avec 1 des Pokémon de votre Banc.",
		},
		damage: 30
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
