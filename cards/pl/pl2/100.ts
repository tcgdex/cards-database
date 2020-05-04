import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-100",
	localId: 100,

	// Card informations
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/100/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/100/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",



	attacks: [{
		name: {},
		text: {
			fr: "Les dégâts infligés par des attaques au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Métal est attachée n'est pas Metal. Énergie Métal fournit de l'Énergie Metal. (Elle ne compte pas comme carte Énergie de base).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
