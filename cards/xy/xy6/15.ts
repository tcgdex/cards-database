import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-15",
	localId: 15,

	// Card informations
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 663,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/15/high",
		},
	},

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grand Loop",
			fr: "Grande Boucle",
		},
		text: {
			en: "Draw 3 cards. You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Piochez 3 cartes. Vous pouvez échanger ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Brave Bird",
			fr: "Rapace",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
