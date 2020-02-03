import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-143",
	localId: 143,

	// Card informations
	name: {
		en: "Shrine of Punishment",
		fr: "Chapelle des Châtiments",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/143/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/143/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/143/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/143/high.png",
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
			fr: "Entre chaque tour, placez un marqueur de dégâts sur chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

