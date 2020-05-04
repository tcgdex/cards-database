import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV94",
	localId: "SV94",

	// Card informations
	name: {
		en: "Tapu Lele-GX",
		fr: "Tokopiyon-GX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 925,
		type: AbilityType.TALENT,
		name: {
			en: "Wonder Tag",
			fr: "Relais Miracle",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Drive",
			fr: "Propulsion d’Énergie",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Tapu Cure-GX",
			fr: "Toko Soins-GX",
		},
		text: {
			en: "Heal all damage from 2 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de 2 de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
