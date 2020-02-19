import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-138",
	localId: 138,

	// Card informations
	name: {
		en: "Giovanni's Scheme",
		fr: "Combine de Giovanni",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/138/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/138/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/138/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/138/high.png",
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
			fr: "Choisissez l'une de ces options : \n\n•Piochez des cartes jusqu'à ce que vous ayez 5 cartes en main.\n•Pendant ce tour, les attaques de votre Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

