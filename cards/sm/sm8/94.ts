import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-94",
	localId: 94,

	// Card informations
	name: {
		en: "Girafarig",
		fr: "Girafarig",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Get Lost",
			fr: "C’est Perdu",
		},
		text: {
			en: "Put 2 cards from your opponent's discard pile in the Lost Zone.",
			fr: "Placez 2 cartes de la pile de défausse de votre adversaire dans la Zone Perdue.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
			fr: "Choc Cérébral",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
