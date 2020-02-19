import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-31",
	localId: 31,

	// Card informations
	name: {
		en: "Palkia-EX",
		fr: "Palkia-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/31/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/31/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/31/high.png",
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
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aqua Turbo",
			fr: "Aqua Turbo",
		},
		text: {
			en: "Search your deck for up to 2 Water Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 cartes Énergie Water dans votre deck et attachez-les à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Pearl Hurricane",
			fr: "Ouragan Perle",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

