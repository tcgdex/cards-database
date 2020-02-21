import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-110",
	localId: 110,

	// Card informations
	name: {
		en: "Fossil Researcher",
		fr: "Chercheur de Fossiles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/110/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/110/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une combinaison de jusqu'à 2 Amagara ou Ptyranidur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
