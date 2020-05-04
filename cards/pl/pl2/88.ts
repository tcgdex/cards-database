import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Aaron's Collection",
		fr: "La collection d'Aaron",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/88/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/88/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/88/high",
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
			fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 2 Pokémon SP et cartes Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main.",
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
