import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-24",
	localId: 24,

	// Card informations
	name: {
		en: "Exeggutor",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/24/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "String Bomb",
		},
		text: {
			en: "Flip a coin for each basic Energy card attached to Exeggutor and to the Defending Pokémon. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Nutritional Support",
		},
		text: {
			en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
