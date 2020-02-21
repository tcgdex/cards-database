import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-96",
	localId: 96,

	// Card informations
	name: {
		en: "Garchomp",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/96/high",
		},
	},

	evolveFrom: {
		en: "Gabite",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mach Cut",
		},
		text: {
			en: "Discard a Special Energy attached to the Defending Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.FIGHTING
		],
		name: {
			en: "Dragonblade",
		},
		text: {
			en: "Discard the top 2 cards of your deck.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DRAGON,
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
