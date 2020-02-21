import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-5",
	localId: 5,

	// Card informations
	name: {
		en: "Carnivine",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 455,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Lure Poison",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spit Squall",
		},
		text: {
			en: "Your opponent puts the Defending Pokémon and all cards attached to it into his or her hand.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
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
