import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-86",
	localId: 86,

	// Card informations
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/86/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/86/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cycle Draw",
			fr: "Pioche Cyclique",
		},
		text: {
			en: "Discard a card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
