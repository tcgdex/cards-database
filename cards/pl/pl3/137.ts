import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-137",
	localId: 137,

	// Card informations
	name: {
		en: "Cyrus's Initiative",
		fr: "L'initiative d'Hélio",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/137/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/137/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/137/high",
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
			fr: "Lancez 2 pièces. Si l'une d'elles est face, regardez la main de votre adversaire. Pour chaque face, choisissez 1 carte de la main de votre adversaire et placez-la au-dessous de son deck dans n'importe quel ordre.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
