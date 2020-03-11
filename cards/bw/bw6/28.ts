import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-28",
	localId: 28,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/28/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/28/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/28/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Clear Search",
			fr: "Recherche Libre",
		},
		text: {
			en: "Search your deck for any 3 cards and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez 3 cartes dans votre deck puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
