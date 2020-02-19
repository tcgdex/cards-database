import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-36",
	localId: 36,

	// Card informations
	name: {
		en: "Swanna",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 581,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/36/high.png",
		},
	},

	evolveFrom: {
		en: "Ducklett",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Healing Pirouette",
		},
		text: {
			en: "Heal 30 damage from each of your Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Incessant Peck",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card

