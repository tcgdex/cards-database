import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-104",
	localId: 104,

	// Card informations
	name: {
		en: "Sentret",
		fr: "Fouinette",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 161,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/104/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/104/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grope",
			fr: "À l'aveuglette",
		},
		text: {
			en: "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
			fr: "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez l'autre carte au dessous de votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
