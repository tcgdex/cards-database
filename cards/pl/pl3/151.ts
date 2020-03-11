import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-151",
	localId: 151,

	// Card informations
	name: {
		fr: "Milobellus",
	},

	hp: 80,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/151/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/151/high",
		},
	},

	evolveFrom: {
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: -1,
		type: AbilityType.POKEBODY,
		name: {
			fr: "Aqua-mirage",
		},
		text: {
			fr: "Si vous n'avez plus de cartes en main, prévenez tous les dégâts infligés à Milobellus par des attaques de Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			fr: "Vague diminutrice",
		},
		text: {
			fr: "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Milobellus.",
		},
		damage: "80-"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Vainqueurs Suprêmes",
		code: "pl3"
	}
}

export default card
