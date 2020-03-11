import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-101",
	localId: 101,

	// Card informations
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smack 'n' Slack",
			fr: "Raclée Dodo",
		},
		text: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
