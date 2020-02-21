import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-188",
	localId: 188,

	// Card informations
	name: {
		en: "Ultra Forest Kartenvoy",
		fr: "Kata-Sensei de l’Ultra-Forêt",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/188/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/188/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/188/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/188/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les dégâts des attaques de vos Ultra-Chimères ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
