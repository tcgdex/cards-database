import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Bellossom",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 182,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/3/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Nectar",
		},
		text: {
			en: "Flip a coin. If heads, remove all damage counters from 1 of your Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Flower Dance",
		},
		text: {
			en: "Does 30 damage times the number of cards with Bellossom in their names that you have in play (including this one).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
