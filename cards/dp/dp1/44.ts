import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-44",
	localId: 44,

	// Card informations
	name: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 268,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/44/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/44/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/44/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, if Cascoon would be damaged by an attack, prevent that attack's damage done to Cascoon if that damage is 30 or less.",
			fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Blindalys, prévenez ces dégâts s'ils sont de 30 ou moins.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Gooey Thread",
			fr: "Fil gluant",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
