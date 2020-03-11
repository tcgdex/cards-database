import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-105",
	localId: 105,

	// Card informations
	name: {
		en: "Diantha",
		fr: "Dianthéa",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon Fairy a été mis K.O. pendant le dernier tour de votre adversaire.\n\nAjoutez 2 cartes de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
