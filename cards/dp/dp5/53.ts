import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-53",
	localId: 53,

	// Card informations
	name: {
		en: "Buneary",
		fr: "Laporeille",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 427,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/53/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/53/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {
			en: "Drawup Power",
			fr: "Pouvoir bloquant",
		},
		text: {
			en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Extend Ears",
			fr: "Oreilles extensibles",
		},
		text: {
			en: "Remove 1 damage counter from each of your Benched Pokémon.",
			fr: "Retirez 1 marqueur de dégât à chacun des Pokémon de votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
