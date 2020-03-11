import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-69",
	localId: 69,

	// Card informations
	name: {
		en: "Blaine's Last Stand",
		fr: "Dernière Chance d’Auguste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si c’est votre dernière carte en main.\n\nPiochez 2 cartes pour chacun de vos Pokémon Fire en jeu.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
