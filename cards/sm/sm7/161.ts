import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-161",
	localId: 161,

	// Card informations
	name: {
		en: "Apricorn Maker",
		fr: "Artisan de Noigrumes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/161/high",
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
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Objet contenant le mot « Ball » dans leur nom, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
