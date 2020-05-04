import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-112",
	localId: 112,

	// Card informations
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 778,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Eri Yamaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Filch",
			fr: "Maraudage",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Copycat",
			fr: "Photocopie",
		},
		text: {
			en: "If your opponent's Pokémon used an attack that isn't a GX attack during their last turn, use it as this attack.",
			fr: "Si le Pokémon de votre adversaire a utilisé une attaque autre qu’une attaque GX pendant son dernier tour, utilisez-la en tant que cette attaque.",
		},
	}],





	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
