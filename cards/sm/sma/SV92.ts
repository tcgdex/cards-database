import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV92",
	localId: "SV92",

	// Card informations
	name: {
		en: "Tapu Fini-GX",
		fr: "Tokopisco-GX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Aqua Ring",
			fr: "Anneau Hydro",
		},
		text: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Shot",
			fr: "Hydro-Coup",
		},
		text: {
			en: "Discard 2 Water Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Water de ce Pokémon. Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tapu Storm-GX",
			fr: "Toko Tempête-GX",
		},
		text: {
			en: "Shuffle your opponent's Active Pokémon and all cards attached to it into their deck. If your opponent has no Benched Pokémon, this attack does nothing. (You can't use more than 1 GX attack in a game.)",
			fr: "Mélangez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans son deck. Si votre adversaire n’a aucun Pokémon de Banc, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],





	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
