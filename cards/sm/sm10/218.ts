import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-218",
	localId: 218,

	// Card informations
	name: {
		en: "Blastoise-GX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/218/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/218/high.png",
		},
	},

	evolveFrom: {
		en: "Wartortle",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},

	abilities: [{
		id: 75,
		type: AbilityType.TALENT,
		name: {
			en: "Solid Shell",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Rocket Splash",
		},
		text: {
			en: "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 60 damage for each card you shuffled into your deck in this way.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Giant Geyser-GX",
		},
		text: {
			en: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

