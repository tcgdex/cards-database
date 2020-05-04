import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy8/135/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/135/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur place un Pokémon de sa pile de défausse dans sa main. (Votre adversaire choisit en premier.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
