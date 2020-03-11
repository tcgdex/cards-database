import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-109",
	localId: 109,

	// Card informations
	name: {
		en: "Looker's Investigation",
		fr: "L'enquête de Beladonis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/109/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/109/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/109/high",
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
			fr: "Regardez la main de votre adversaire puis choisissez entre vous et votre adversaire. Ce joueur mélange sa main avec son deck et pioche jusqu'à 5 cartes.",
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
