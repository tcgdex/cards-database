import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-89",
	localId: 89,

	// Card informations
	name: {
		en: "Silver Mirror",
		fr: "Miroir d'Argent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/89/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/89/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/89/high.png",
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
			fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés au Pokémon auquel cette carte est attachée (excepté les Pokémon-EX) par les Pokémon de la Team Plasma de votre adversaire.",
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

