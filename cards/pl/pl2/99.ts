import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-99",
	localId: 99,

	// Card informations
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/99/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/99/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/99/high",
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
			fr: "Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Obscurité est attachée n'est pas Darkness. Énergie Obscurité fournit de l'Énergie Darkness. (Elle ne compte pas comme carte Énergie de base).",
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
