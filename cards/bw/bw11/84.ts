import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-84",
	localId: 84,

	// Card informations
	name: {
		en: "Terrakion",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 639,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Retaliate",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 60 more damage.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Land Crush",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
