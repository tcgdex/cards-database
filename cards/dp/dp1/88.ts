import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-88",
	localId: 88,

	// Card informations
	name: {
		en: "Marill",
		fr: "Marill",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 183,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/88/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/88/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		text: {
			en: "If Marill is evolved from Azurill, this attack does 10 damage plus 20 more damage.",
			fr: "Si Marill évolue d'Azurill, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Splashing Turn",
			fr: "Tour éclaboussant",
		},
		text: {
			en: "Switch Marill with 1 of your Benched Pokémon.",
			fr: "Échangez Marill avec 1 des Pokémon de votre Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
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
