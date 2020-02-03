import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy8/133/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/133/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/133/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/133/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



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

