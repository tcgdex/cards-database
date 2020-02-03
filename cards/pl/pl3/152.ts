import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			fr: "https://assets.tcgdex.net/fr/pl/pl3/152/low.png",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/152/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Vainqueurs Suprêmes",
		code: "pl3"
	}
}

export default card

