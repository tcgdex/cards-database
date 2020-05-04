import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-152",
	localId: 152,

	// Card informations
	name: {
		fr: "Relicanth",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/152/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/152/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			fr: "Pression abyssale",
		},
		text: {
			fr: "Lors du prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est Colorless Colorless de plus.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Aqua-vague",
		},
		text: {
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
		},
		damage: "40+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Vainqueurs Suprêmes",
		code: "pl3"
	}
}

export default card
