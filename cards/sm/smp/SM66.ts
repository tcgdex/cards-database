import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM66",
	localId: "SM66",

	// Card informations
	name: {
		en: "Pheromosa-GX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 795,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM66/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Fast Raid",
		},
		text: {
			en: "If you go first, you can use this attack on your first turn.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Cruel Spike",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Beauty-GX",
		},
		text: {
			en: "This attack does 50 damage for each Prize card your opponent has taken. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

