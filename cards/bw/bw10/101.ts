import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-101",
	localId: 101,

	// Card informations
	name: {
		en: "Iris",
		fr: "Iris",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de vos Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
