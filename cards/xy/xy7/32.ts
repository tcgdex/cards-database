import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-32",
	localId: 32,

	// Card informations
	name: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/32/high",
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
			Type.PSYCHIC
		],
		name: {
			en: "Future Spin",
			fr: "Stop Θ",
		},
		text: {
			en: "Look at the top 3 cards of either player's deck and put them back on top of that player's deck in any order.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			fr: "Tour du Futur",
		},
		text: {
			fr: "Regardez les 3 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
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
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
