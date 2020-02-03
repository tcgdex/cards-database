import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/105/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/105/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/105/high.png",
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
			fr: "Choisissez dans votre deck une carte Supporter, une carte Énergie et une carte Dresseur dont le nom comporte Invention de Team Galaxie. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
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

