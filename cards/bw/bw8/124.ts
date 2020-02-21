import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-124",
	localId: 124,

	// Card informations
	name: {
		en: "Plasma Frigate",
		fr: "Frégate Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/124/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/124/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chacun des Pokémon auquel de l'Énergie Plasma est attachée (les vôtres et ceux de votre adversaire) n'a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
