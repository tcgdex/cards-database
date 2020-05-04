import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-89",
	localId: 89,

	// Card informations
	name: {
		en: "Sky Field",
		fr: "Zone Aérienne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/89/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/89/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur peut avoir 8 Pokémon sur son Banc.\n\n(Lorsque cette carte n’est plus en jeu, chaque joueur défausse des Pokémon de Banc jusqu'à en avoir 5 sur le Banc. Le propriétaire de cette carte défausse en premier.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
