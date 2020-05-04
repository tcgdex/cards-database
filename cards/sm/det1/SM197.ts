import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "det1-SM197",
	localId: "SM197",

	// Card informations
	name: {
		fr: "Amphinobi-GX",
	},

	hp: 230,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM197/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM197/high",
		},
	},

	evolveFrom: {
		fr: "Croâporal",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "MPC Film",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			fr: "Maître Évasif",
		},
		text: {
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre dernière carte en main, vous pouvez le placer sur votre Banc. Dans ce cas, piochez 3 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			fr: "Tranche-Brume",
		},
		text: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 130
	},{
		cost: [
			Type.WATER
		],
		name: {
			fr: "Brume Obscure-GX",
		},
		text: {
			fr: "Placez l’un des Pokémon de Banc de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card
