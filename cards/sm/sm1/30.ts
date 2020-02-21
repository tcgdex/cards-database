import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Poliwag",
		fr: "Ptitard",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 60,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
