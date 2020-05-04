import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-97",
	localId: 97,

	// Card informations
	name: {
		en: "Bursting Balloon",
		fr: "Ballon Explosif",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin du tour de votre adversaire.\n\nSi le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
