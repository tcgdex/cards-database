import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV33",
	localId: "SV33",

	// Card informations
	name: {
		en: "Kartana",
		fr: "Katagami",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 798,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Divine Paper",
			fr: "Papier Sublime",
		},
		text: {
			en: "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
			fr: "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
