import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-59",
	localId: 59,

	// Card informations
	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/59/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/59/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, Carvanha's Bite attack's base damage is 40.",
			fr: "Pendant votre prochain tour, l'attaque Morsure de Carvanha inflige 40 dégâts de base.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
