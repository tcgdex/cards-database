import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/109/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/109/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/109/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/109/high.png",
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

