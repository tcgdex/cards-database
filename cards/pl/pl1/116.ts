import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-101 Energy Gain",
		fr: "Gain d'Énergie Invention G-101 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/116/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/116/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Makoto Imai",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez Invention G-101 Gain d'Énergie de Team Galaxie à 1 de vos Pokémon SP qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la. Lorsque le Pokémon auquel cette carte est attachée n'est plus un Pokémon SP, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Tant qu'Invention G-101 Gain d'Énergie de Team Galaxie est attachée à 1 Pokémon, le coût d'attaque des attaques de ce Pokémon est de Colorless de moins.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
