import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY133",
	localId: "XY133",

	// Card informations
	name: {
		en: "Ash-Greninja-EX",
		fr: "Sachanobi-EX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY133/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY133/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY133/high",
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dancing Shuriken",
			fr: "Shuriken Dansant",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ninja Blade",
			fr: "Lame Ninja",
		},
		text: {
			en: "This Pokémon can't use Ninja Blade during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Lame Ninja pendant votre prochain tour.",
		},
		damage: 130
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
