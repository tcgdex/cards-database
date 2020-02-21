import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-96",
	localId: 96,

	// Card informations
	name: {
		en: "Latios ex δ",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 120,
		type: AbilityType.POKEBODY,
		name: {
			en: "Link Wing",
		},
		text: {
			en: "The Retreat Cost for each of your Latias, Latias ex, Latios, and Latios ex is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Barrier",
		},
		text: {
			en: "Prevent all effects of an attack, including damage, done to Latios ex by your opponent's Pokémon-ex during your opponent's next turn.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
