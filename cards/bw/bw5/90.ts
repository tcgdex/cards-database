import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-90",
	localId: 90,

	// Card informations
	name: {
		en: "Tornadus-EX",
	},

	hp: 170,

	type: [
		Type.COLORLESS,
	],

	dexId: 641,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blow Through",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 more damage.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Blast",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
