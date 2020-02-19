import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Silcoon",
		fr: "Armulys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 266,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/63/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/63/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/63/high.png",
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
			en: "During your opponent's next turn, if Silcoon would be damaged by an attack, prevent that attack's damage done to Silcoon if that damage is 30 or less.",
			fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Armulys, prévenez ces dégâts s'ils sont de 30 ou moins.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Entangling String",
			fr: "Fil emmêlant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
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

