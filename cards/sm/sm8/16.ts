import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-16",
	localId: 16,

	// Card informations
	name: {
		en: "Shuckle",
		fr: "Caratroc",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1243,
		type: AbilityType.TALENT,
		name: {
			en: "Fresh Squeezed",
			fr: "Fraîchement Pressé",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 basic Energy cards and discard them. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher jusqu’à 3 cartes Énergie de base dans votre deck et les défausser. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Energy Drink",
			fr: "Boisson Énergisante",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
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
