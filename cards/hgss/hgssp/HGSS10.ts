import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS10",
	localId: "HGSS10",

	// Card informations
	name: {
		en: "Latias",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
		},
		text: {
			en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Infinite Wind",
		},
		text: {
			en: "If Latios is on your Bench, remove 2 damage counters from each of your Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
