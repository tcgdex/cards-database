import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-61",
	localId: 61,

	// Card informations
	name: {
		en: "Meowth",
		fr: "Miaouss",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/61/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/61/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/61/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Act Tough",
			fr: "Dur à Cuire",
		},
		text: {
			en: "If this Pokémon has any Darkness Energy attached to it, this attack does 20 more damage.",
			fr: "Si de l'Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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

