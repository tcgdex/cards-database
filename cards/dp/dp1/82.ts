import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/82/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/82/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pain Payback",
			fr: "Renvoi de souffrance",
		},
		text: {
			en: "Move 1 damage counter from Gastly to 1 of your opponent's Pokémon.",
			fr: "Déplacez 1 marqueur de dégât de Fantominus sur 1 des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
