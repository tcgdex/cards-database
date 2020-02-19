import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Flint's Willpower",
		fr: "La volonté d'Adrien",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/91/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/91/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon SP.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

