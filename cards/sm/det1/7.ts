import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Panic",
			fr: "Panique",
		},
		text: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
