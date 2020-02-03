import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Felicity's Drawing",
		fr: "Le dessin de Felicity",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/98/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/98/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/98/high.png",
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
			fr: "Défaussez jusqu'à 2 cartes de votre main. Si vous défaussez 1 carte, piochez 3 cartes. Si vous défaussez 2 cartes, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

