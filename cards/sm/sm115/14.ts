import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-14",
	localId: 14,

	// Card informations
	name: {
		en: "Starmie-GX",
		fr: "Staross-GX",
	},

	hp: 190,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/14/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Otani",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Star Stream",
			fr: "Flot Stellaire",
		},
		text: {
			en: "Attach 2 Water Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez 2 cartes Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 100
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump-GX",
			fr: "Hydrocanon-GX",
		},
		text: {
			en: "This attack does 40 more damage times the amount of Water Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 40 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
