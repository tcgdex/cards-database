import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-82",
	localId: 82,

	// Card informations
	name: {
		en: "Fossil Excavator",
		fr: "Excavateur de fossiles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/82/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/82/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Choisissez dans votre deck ou votre pile de défausse une carte Dresseur dont le nom comporte Fossile ou une carte Évolution de Niveau 1 ou 2 qui évolue d'un Fossile. Montrez-la à votre adversaire et placez-la dans votre main. Si vous choisissez dans votre deck, mélangez-le.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
