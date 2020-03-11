import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-61",
	localId: 61,

	// Card informations
	name: {
		en: "Lance ◇",
		fr: "Peter ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kodama",



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nCherchez jusqu’à 2 Pokémon Dragon dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
