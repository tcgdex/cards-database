import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY20",
	localId: "XY20",

	// Card informations
	name: {
		en: "Greninja-EX",
		fr: "Amphinobi-EX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY20/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY20/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sharpshooting",
			fr: "Tir de Précision",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Blast",
			fr: "Explosion Aquatique",
		},
		text: {
			en: "Discard 1 Water Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Water attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
