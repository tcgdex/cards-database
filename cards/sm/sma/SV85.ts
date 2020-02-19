import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV85",
	localId: "SV85",

	// Card informations
	name: {
		en: "Hiker",
		fr: "Montagnard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV85/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV85/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV85/high.png",
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
			fr: "Regardez les 5 cartes du dessus du deck de l’un des joueurs et choisissez-en une. Ce joueur mélange les autres cartes avec son deck. Ensuite, placez la carte choisie sur le dessus de ce deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

