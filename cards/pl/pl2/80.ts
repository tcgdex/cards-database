import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-80",
	localId: 80,

	// Card informations
	name: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident Niv. 27",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 422,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/80/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/80/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		name: {
			en: "Healing Sea",
			fr: "Mer guérisseuse",
		},
		text: {
			en: "Flip 2 coins. Choose 1 of your Pokémon. For each heads, remove 1 damage counter from that Pokémon.",
			fr: "Lancez 2 pièces. Choisissez 1 de vos Pokémon. Pour chaque face, retirez-lui 1 marqueur de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de boue",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
