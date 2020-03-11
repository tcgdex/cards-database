import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-229",
	localId: 229,

	// Card informations
	name: {
		en: "Dragonite-GX",
		fr: "Dracolosse-GX",
	},

	hp: 250,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/229/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/229/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/229/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/229/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "ConceptLab",



	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Judgment",
			fr: "Jugement Céleste",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 270
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mach Delivery-GX",
			fr: "Livraison Flash-GX",
		},
		text: {
			en: "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main jusqu’à en avoir 9 ou moins. Piochez des cartes jusqu’à ce que vous ayez 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
