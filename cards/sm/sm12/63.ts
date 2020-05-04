import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-63",
	localId: 63,

	// Card informations
	name: {
		en: "Wishiwashi-GX",
		fr: "Froussardine-GX",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 746,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "sadaji",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "School Storm",
			fr: "Banc Houleux",
		},
		text: {
			en: "This attack does 20 damage for each of your Wishiwashi and Wishiwashi-GX in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Froussardine et Froussardine-GX en jeu.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Massive Catch-GX",
			fr: "Prise Massive-GX",
		},
		text: {
			en: "Look at the top 12 cards of your deck and put any number of Basic Pokémon you find there onto your Bench. Shuffle the other cards back into your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Regardez les 12 cartes du dessus de votre deck et placez autant de Pokémon de base trouvés que vous le voulez sur votre Banc. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
