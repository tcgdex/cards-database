import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-110",
	localId: 110,

	// Card informations
	name: {
		en: "Memory Berry",
		fr: "Baie de mémoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/110/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/110/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez Baie de mémoire à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée peut utiliser n'importe quelle attaque de son Pokémon de base ou de sa carte Évolution de Niveau 1. (Vous devez toujours payer le coût en Énergie de cette attaque),",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

