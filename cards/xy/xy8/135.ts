import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-135",
	localId: 135,

	// Card informations
	name: {
		en: "Buddy-Buddy Rescue",
		fr: "Rescousse Copain-Copain",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/135/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/135/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/135/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur place un Pokémon de sa pile de défausse dans sa main. (Votre adversaire choisit en premier.)",
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

