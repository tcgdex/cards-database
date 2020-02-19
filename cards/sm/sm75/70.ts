import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-70",
	localId: 70,

	// Card informations
	name: {
		en: "Zinnia",
		fr: "Amaryllis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/70/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/70/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nAttachez jusqu’à 2 cartes Énergie de base de votre main à l’un de vos Pokémon Dragon.",
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

