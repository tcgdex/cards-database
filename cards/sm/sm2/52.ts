import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Gothita",
		fr: "Scrutella",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 574,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Blown Kiss",
			fr: "Baiser Volé",
		},
		text: {
			en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
			fr: "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
