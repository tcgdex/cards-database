import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Team Magma's Aron",
		fr: "Galekid de la Team Magma",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/12/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/12/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

