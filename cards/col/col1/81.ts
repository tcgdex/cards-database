import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Lost World",
		fr: "Monde perdu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/81/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/81/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Hideaki Hakozaki",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l'utiliser.",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois durant le tour de chaque joueur, si l'adversaire du joueur a au moins 6 Pokémon dans la Zone Perdue, le joueur peut choisir de gagner la partie.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
