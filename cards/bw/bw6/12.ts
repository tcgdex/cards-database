import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-12",
	localId: 12,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Rosélia",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 315,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/12/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/12/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Whip",
			fr: "Double Fouet",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Relaxing Fragrance",
			fr: "Parfum Relaxant",
		},
		text: {
			en: "Heal 30 damage and remove all Special Conditions from this Pokémon.",
			fr: "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
