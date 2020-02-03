import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm75/61/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/61/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/61/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



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

