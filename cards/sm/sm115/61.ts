import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-61",
	localId: 61,

	// Card informations
	name: {
		en: "Misty's Cerulean City Gym",
		fr: "Arène d’Azuria d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/61/high",
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
			fr: "Les attaques des Staross-GX (les vôtres et ceux de votre adversaire) infligent 40 dégâts supplémentaires au Pokémon Actif de l’adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
