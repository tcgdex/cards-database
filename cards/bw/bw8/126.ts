import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-126",
	localId: 126,

	// Card informations
	name: {
		en: "Virbank City Gym",
		fr: "Arène d'Ondes-sur-Mer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/126/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/126/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/126/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés (les vôtres et ceux de votre adversaire) entre chaque tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

