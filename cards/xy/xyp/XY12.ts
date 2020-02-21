import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY12",
	localId: "XY12",

	// Card informations
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 679,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
			fr: "Danse-Lames",
		},
		text: {
			en: "During your next turn, this Pokémon's Slash attack's base damage is 40.",
			fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Tranche de ce Pokémon sont de 40.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
