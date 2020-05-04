import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-59",
	localId: 59,

	// Card informations
	name: {
		en: "Spoink",
		fr: "Spoink",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 325,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/59/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/59/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Flail Around",
			fr: "Fléau Bougeant",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
