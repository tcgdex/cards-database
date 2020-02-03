import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-81",
	localId: 81,

	// Card informations
	name: {
		en: "Iris",
		fr: "Iris",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/81/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/81/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/81/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de vos Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

