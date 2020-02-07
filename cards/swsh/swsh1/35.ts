import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Cinderace",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/35/high.png",
		},
	},

	evolveFrom: {
		en: "Raboot",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Pyro Ball",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Burned.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Burning Kick",
		},
		text: {
			en: "Discard all Energy from this Pokémon.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

