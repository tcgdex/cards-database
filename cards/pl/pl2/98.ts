import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl2/98/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/98/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/98/high.png",
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
			fr: "Vous pouvez défausser une carte de votre main. Ensuite, piochez des cartes jusqu'à ce que vous ayez 6 cartes en main. (Si vous ne pouvez pas piocher de cartes, vous ne pouvez pas jouer cette carte).",
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

