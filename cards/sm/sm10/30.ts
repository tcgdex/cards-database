import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-30",
	localId: 30,

	// Card informations
	name: {
		en: "Salandit",
		fr: "Tritox",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 757,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/30/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/30/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Grass Fire",
			fr: "Feu de Brousse",
		},
		text: {
			en: "Discard a Grass Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie Grass du Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

