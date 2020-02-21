import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV87",
	localId: "SV87",

	// Card informations
	name: {
		en: "Aether Paradise Conservation Area",
		fr: "Réserve Naturelle du Paradis Æther",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon Grass de base et les Pokémon Lightning de base (les vôtres et ceux de votre adversaire) reçoivent 30 dégâts de moins des attaques de l’adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
