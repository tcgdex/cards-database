import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop6-13",
	localId: 13,

	// Card informations
	name: {
		en: "Cherubi",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 420,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop6/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop6/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leech Seed",
		},
		text: {
			en: "If this attack does any damage to the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Cherubi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 6",
		code: "pop6"
	}
}

export default card
