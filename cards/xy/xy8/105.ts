import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-105",
	localId: 105,

	// Card informations
	name: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 682,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/105/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "This attack does 10 damage times the number of damage counters on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
