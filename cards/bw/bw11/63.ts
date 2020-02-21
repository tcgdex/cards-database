import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-63",
	localId: 63,

	// Card informations
	name: {
		en: "Toxicroak",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/63/high",
		},
	},

	evolveFrom: {
		en: "Croagunk",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Revenge",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 70 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
