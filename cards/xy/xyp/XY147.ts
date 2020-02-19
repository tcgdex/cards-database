import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY147",
	localId: "XY147",

	// Card informations
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY147/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY147/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY147/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY147/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hyperspace Punch",
			fr: "Poing Hyperespace",
		},
		text: {
			en: "This attack does 20 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Pitfall",
			fr: "Frappe Dimensionnelle",
		},
		text: {
			en: "This Pokémon can't use Pitfall during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Frappe Dimensionnelle pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

