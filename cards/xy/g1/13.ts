import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Ninetales-EX",
		fr: "Feunard-EX",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare Bonus",
			fr: "Fulmi-Bonus",
		},
		text: {
			en: "Discard a Fire Energy card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte Énergie Fire de votre main. Dans ce cas, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
