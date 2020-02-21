import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-23",
	localId: 23,

	// Card informations
	name: {
		en: "Staryu",
		fr: "Stari",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 120,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/23/high",
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
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon and heal all damage from this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
