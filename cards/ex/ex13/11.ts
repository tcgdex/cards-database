import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-11",
	localId: 11,

	// Card informations
	name: {
		en: "Latias δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1090,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dual Aura",
		},
		text: {
			en: "As long as you have Latios or Latios ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spearhead",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
