import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-74",
	localId: 74,

	// Card informations
	name: {
		en: "Escavalier",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 589,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/74/high",
		},
	},

	evolveFrom: {
		en: "Karrablast",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Joust",
		},
		text: {
			en: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Cavalry Lance",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon has no Weakness.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
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
