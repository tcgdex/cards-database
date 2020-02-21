import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-139",
	localId: 139,

	// Card informations
	name: {
		en: "Palmer's Contribution",
		fr: "La contribution de Koner",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/139/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/139/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/139/high",
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
			fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 5 Pokémon et cartes Énergie de base. Montrez-les à votre adversaire et mélangez-les à votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
