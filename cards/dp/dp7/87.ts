import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-87",
	localId: 87,

	// Card informations
	name: {
		en: "Marley's Request",
		fr: "Marley's Request",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/87/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/87/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/87/high",
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
			fr: "Choisissez dans votre pile de défausse 2 cartes Dresseur, Supporter ou Stade différentes et montrez-les à votre adversaire. Celui-ci en choisit une. Placez cette carte dans votre main et défaussez l'autre. (Si toutes les cartes Dresseur, Supporter et Stade dans votre pile de défausse ont le même nom, choisissez-en une. Montrez-la à votre adversaire et placez-la dans votre main.)",
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
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
