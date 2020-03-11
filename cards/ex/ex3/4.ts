import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-4",
	localId: 4,

	// Card informations
	name: {
		en: "Flygon",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/4/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING
		],
		name: {
			en: "Energy Shower",
		},
		text: {
			en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Burn",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-30"
	},{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
