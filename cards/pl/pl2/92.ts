import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl2/92/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/92/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



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







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
