import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM67",
	localId: "SM67",

	// Card informations
	name: {
		en: "Celesteela-GX",
	},

	hp: 200,

	type: [
		Type.METAL,
	],

	dexId: 797,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Fall",
		},
		text: {
			en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Press",
		},
		damage: 130
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blaster-GX",
		},
		text: {
			en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) (You can't use more than 1 GX attack in a game.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
