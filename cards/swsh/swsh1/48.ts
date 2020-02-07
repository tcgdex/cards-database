import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},

	hp: 130,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/48/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/48/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/48/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Kazuma Koda"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aqua Wash",
			fr: "Aqua-Lavage",
		},
		text: {
			en: "You may put 2 Energy attached to your opponent’s Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire jusqu’à 2 Énergies attachées à son Pokémon Actif.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

