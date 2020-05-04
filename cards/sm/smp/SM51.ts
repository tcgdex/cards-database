import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM51",
	localId: "SM51",

	// Card informations
	name: {
		en: "Alolan Meowth",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		name: {
			en: "Nasty Plot",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Scratch",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
