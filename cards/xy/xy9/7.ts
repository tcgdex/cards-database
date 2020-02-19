import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-7",
	localId: 7,

	// Card informations
	name: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 548,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/7/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/7/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/7/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Aromatherapy",
			fr: "Aromathérapie",
		},
		text: {
			en: "Heal 10 damage from each of your Pokémon.",
			fr: "Soignez 10 dégâts à chacun de vos Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

