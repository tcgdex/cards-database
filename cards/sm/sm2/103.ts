import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-103",
	localId: 103,

	// Card informations
	name: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 276,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
