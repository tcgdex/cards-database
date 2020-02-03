import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-92",
	localId: 92,

	// Card informations
	name: {
		en: "Lucian's Assignment",
		fr: "La mission de Lucio",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/92/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/92/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/92/high.png",
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
			fr: "Déplacez autant de cartes Énergie attachées à 1 de vos Pokémon que vous le voulez sur un autre de vos Pokémon.",
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

