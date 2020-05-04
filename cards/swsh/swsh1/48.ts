import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-48",
	localId: 48,

	dexId: 131,

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/48/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/48/low",
		}
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuma Koda",



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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
