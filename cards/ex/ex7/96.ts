import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-96",
	localId: 96,

	// Card informations
	name: {
		en: "Rocket's Articuno ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 299,
		type: AbilityType.POKEBODY,
		name: {
			en: "Darkness Veil",
		},
		text: {
			en: "As long as Rocket's Articuno ex has any Darkness Energy attached to it prevent all effects except damage by an opponent's attack done to Rocket's Articuno ex.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Freeze Solid",
		},
		text: {
			en: "Search your discard pile for a Water Energy card and attach it to Rocket's Articuno ex.\"",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Wing",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card

