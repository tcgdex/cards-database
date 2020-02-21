import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-148",
	localId: 148,

	// Card informations
	name: {
		en: "Professor Kukui",
		fr: "Prof. Euphorbe",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/148/high",
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
			fr: "Piochez 2 cartes. Pendant ce tour, les attaques de vos Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
