import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Cyndaquil",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 155,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leer",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack Cyndaquil during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Swift",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
