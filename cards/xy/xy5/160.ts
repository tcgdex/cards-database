import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-160",
	localId: 160,

	// Card informations
	name: {
		en: "Teammates",
		fr: "Senior et Junior",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/160/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/160/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/160/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/160/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer cette carte seulement si l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nCherchez jusqu'à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
