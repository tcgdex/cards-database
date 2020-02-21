import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-126",
	localId: 126,

	// Card informations
	name: {
		en: "Team Galactic's Mars",
		fr: "Mars de la Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/126/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/126/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/126/high",
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
			fr: "Piochez 2 cartes. Ensuite, choisissez sans regarder une carte de la main de votre adversaire et placez-la au dessous de son deck.",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
