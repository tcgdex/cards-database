import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY149",
	localId: "XY149",

	// Card informations
	name: {
		en: "Xerneas-EX",
		fr: "Xerneas-EX",
	},

	hp: 170,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY149/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY149/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY149/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Break Through",
			fr: "Percée",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "X Blast",
			fr: "Explosion X",
		},
		text: {
			en: "This Pokémon can't use X Blast during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Explosion X pendant votre prochain tour.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
