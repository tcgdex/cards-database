import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-16",
	localId: 16,

	// Card informations
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 114,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/16/high",
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
			en: "Tangle Drag",
			fr: "Lasso Piège",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
