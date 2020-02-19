import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-30",
	localId: 30,

	// Card informations
	name: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 353,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/30/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/30/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Bleh",
			fr: "Nananère",
		},
		text: {
			en: "Discard a Special Energy attached to 1 of your opponent's Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
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
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

