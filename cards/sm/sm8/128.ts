import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-128",
	localId: 128,

	// Card informations
	name: {
		en: "Durant",
		fr: "Fermite",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 632,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/128/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/128/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Knock Over",
			fr: "Culbute",
		},
		text: {
			en: "You may discard any Stadium card in play.",
			fr: "Vous pouvez défausser toute carte Stade en jeu.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mountain Munch",
			fr: "Dévore-Montagne",
		},
		text: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
