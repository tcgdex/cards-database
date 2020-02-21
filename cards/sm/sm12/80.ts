import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-80",
	localId: 80,

	// Card informations
	name: {
		en: "Ralts",
		fr: "Tarsal",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 280,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/80/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/80/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teleport",
			fr: "Téléport",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
