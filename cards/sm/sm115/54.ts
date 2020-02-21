import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-54",
	localId: 54,

	// Card informations
	name: {
		en: "Brock's Pewter City Gym",
		fr: "Arène d’Argenta de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/54/high",
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
			fr: "Les Onix-GX (les vôtres et ceux de votre adversaire) subissent 40 dégâts de moins des attaques de l’adversaire (après application de la Faiblesse et de la Résistance).",
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
