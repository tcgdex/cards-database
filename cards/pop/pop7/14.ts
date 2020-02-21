import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-14",
	localId: 14,

	// Card informations
	name: {
		en: "Mareep",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 179,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/14/high",
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
			Type.LIGHTNING
		],
		name: {
			en: "Thundershock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
