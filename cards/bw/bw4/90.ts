import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-90",
	localId: 90,

	// Card informations
	name: {
		en: "Pokémon Center",
		fr: "Centre Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut soigner 20 dégâts à 1 de ses Pokémon de Banc.",
		},
	},{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
