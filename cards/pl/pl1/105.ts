import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Cyrus's Conspiracy",
		fr: "Le complot d'Hélio",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/105/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/105/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/105/high",
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
			fr: "Choisissez dans votre deck une carte Supporter, une carte Énergie et une carte Dresseur dont le nom comporte Invention de Team Galaxie. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
