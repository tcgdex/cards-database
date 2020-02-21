import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "si1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Ivysaur",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 2,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/5/high",
		},
	},

	evolveFrom: {
		en: "Bulbasaur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 75,
		name: "Keiko Fukuyama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Strange Scent",
		},
		text: {
			en: "Each player flips a coin. Each player who gets heads chooses a total of 3 damage counters from among his or her Pokémon and removes them. (If the player's Pokémon have fewer total damage counters than that, he or she removes all of them.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
