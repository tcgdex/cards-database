import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Jumpluff",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/7/high",
		},
	},

	evolveFrom: {
		en: "Skiploom",
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
			en: "Sleep Powder",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leech Seed",
		},
		text: {
			en: "If this attack damages the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Jumpluff, if it has any.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
