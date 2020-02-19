import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-116",
	localId: 116,

	// Card informations
	name: {
		en: "Aether Paradise Conservation Area",
		fr: "Réserve Naturelle du Paradis Æther",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/116/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/116/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/116/high.png",
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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

