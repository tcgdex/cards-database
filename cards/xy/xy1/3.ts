import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 13,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/3/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/3/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Munch",
			fr: "Mange-Feuille",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 20 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
