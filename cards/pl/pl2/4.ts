import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Floatzel GL",
		fr: "Mustéflott  Niv. 37",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/4/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/4/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		name: {
			en: "Incite",
			fr: "Inciter",
		},
		text: {
			en: "Search your discard pile for up to 2 Supporter cards, show them to your opponent, and put them into your hand.",
			fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Supporter, montrez-les à votre adversaire et placez-les dans votre main.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Giant Wave",
			fr: "Vague géante",
		},
		text: {
			en: "Floatzel can't use Giant Wave during your next turn.",
			fr: "Mustéflott  ne peut pas utiliser Vague géante lors de votre prochain tour.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
