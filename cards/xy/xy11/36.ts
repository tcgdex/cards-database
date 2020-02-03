import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-36",
	localId: 36,

	// Card informations
	name: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 712,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/36/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/36/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/36/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Block",
			fr: "Bloc de Glace",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

