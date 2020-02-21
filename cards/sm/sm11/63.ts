import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-63",
	localId: 63,

	// Card informations
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 602,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wild River",
			fr: "Rivière Sauvage",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
