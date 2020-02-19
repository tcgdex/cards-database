import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy6/89/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/89/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur peut avoir 8 Pokémon sur son Banc.\n\n(Lorsque cette carte n’est plus en jeu, chaque joueur défausse des Pokémon de Banc jusqu'à en avoir 5 sur le Banc. Le propriétaire de cette carte défausse en premier.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

