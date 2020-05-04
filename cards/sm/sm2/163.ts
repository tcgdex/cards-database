import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-163",
	localId: 163,

	// Card informations
	name: {
		en: "Field Blower",
		fr: "Nettoyage de Terrain",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/163/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/163/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/163/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez jusqu’à 2 cartes Outil Pokémon ou cartes Stade en jeu, (les vôtres ou celles de votre adversaire), quelle que soit la combinaison, et défaussez-les.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
