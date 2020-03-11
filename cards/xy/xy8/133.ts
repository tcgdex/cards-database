import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-133",
	localId: 133,

	// Card informations
	name: {
		en: "Assault Vest",
		fr: "Veste de Combat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/133/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/133/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/133/high",
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
			fr: "Tous les dégâts infligés au Pokémon auquel cette carte est attachée par des attaques des Pokémon de votre adversaire qui ont des Énergies spéciales leur étant attachées sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
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
