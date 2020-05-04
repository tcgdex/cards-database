import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Leafeon",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/13/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miasma Wind",
		},
		text: {
			en: "Does 50 damage times the number of Special Conditions affecting the Defending Pokémon.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Soothing Scent",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
