import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC19",
	localId: "RC19",

	// Card informations
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 684,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC19/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC19/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC19/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Lick Away",
			fr: "Lèche-Lèche",
		},
		text: {
			en: "Remove all Special Conditions from this Pokémon.",
			fr: "Retirez tous les États Spéciaux de ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

