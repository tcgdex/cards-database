import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-74",
	localId: 74,

	// Card informations
	name: {
		en: "Flower Shop Lady",
		fr: "Fleuriste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/74/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/74/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Cherchez 3 Pokémon et 3 cartes Énergie de base dans votre pile de défausse. Montrez-les à votre adversaire et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
