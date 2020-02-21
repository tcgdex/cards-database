import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
