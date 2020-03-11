import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-172",
	localId: 172,

	// Card informations
	name: {
		en: "Brock's Grit",
		fr: "Vaillance de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/172/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/172/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/172/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une combinaison de 6 cartes Pokémon et cartes Énergie de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
