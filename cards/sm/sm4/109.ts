import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-109",
	localId: 109,

	// Card informations
	name: {
		en: "Gladion",
		fr: "Gladio",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez vos cartes Récompense (actuellement face cachée) et placez l’une d’elles dans votre main. Ensuite, mélangez ce Gladio avec les cartes Récompense qu’il vous reste et replacez-les face cachée. Si vous n’avez pas joué ce Gladio de votre main, il ne fait rien.",
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
