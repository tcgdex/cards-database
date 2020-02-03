import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-110",
	localId: 110,

	// Card informations
	name: {
		en: "Lusamine",
		fr: "Elsa-Mina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/110/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/110/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez une combinaison de 2 cartes Supporter et cartes Stade de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

