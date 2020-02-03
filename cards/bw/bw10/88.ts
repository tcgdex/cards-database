import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-88",
	localId: 88,

	// Card informations
	name: {
		en: "Silver Bangle",
		fr: "Bracelet d'Argent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/88/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/88/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques du Pokémon auquel cette carte est attachée (excepté les Pokémon-EX) infligent 30 dégâts supplémentaires aux Pokémon-EX Actifs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

