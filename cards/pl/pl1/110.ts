import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/110/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/110/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Shizurow",



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
