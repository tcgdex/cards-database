import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-69",
	localId: 69,

	// Card informations
	name: {
		en: "Ace Trainer",
		fr: "Top Dresseur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer cette carte seulement s'il vous reste plus de cartes Récompense que votre adversaire.\n\nChaque joueur mélange sa main avec son deck. Ensuite, piochez 6 cartes. Votre adversaire pioche 3 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
