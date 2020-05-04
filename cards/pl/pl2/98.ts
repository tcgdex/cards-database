import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-98",
	localId: 98,

	// Card informations
	name: {
		en: "Volkner's Philosophy",
		fr: "La Philosophie de Tanguy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/98/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/98/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/98/high",
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
			fr: "Vous pouvez défausser une carte de votre main. Ensuite, piochez des cartes jusqu'à ce que vous ayez 6 cartes en main. (Si vous ne pouvez pas piocher de cartes, vous ne pouvez pas jouer cette carte).",
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
