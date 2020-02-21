import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-135",
	localId: 135,

	// Card informations
	name: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 509,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/135/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/135/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cleaning Up",
			fr: "Nettoyage",
		},
		text: {
			en: "Discard a Pokémon Tool card from 1 of your opponent's Pokémon.",
			fr: "Défaussez une carte Outil Pokémon de l’un des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
