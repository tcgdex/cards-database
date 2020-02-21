import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 114,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/87/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/87/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/87/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Vine Invite",
			fr: "Plante invitante",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Grass Knot",
			fr: "Noeud Herbe",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Colorless dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
