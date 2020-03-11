import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-89",
	localId: 89,

	// Card informations
	name: {
		en: "Dome Fossil",
		fr: "Fossile Dôme",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/89/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/89/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Jouez Fossile Dôme comme si c'était un Pokémon de base Colorless. (Fossile Dôme compte aussi comme une carte Dresseur mais si Fossile Dôme est mise K.O, elle compte comme un Pokémon K.O.) Fossile Dôme ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Dôme. (Cela ne compte pas comme un Pokémon K.O).",
		},
	},{
		name: {
			fr: "Réaction de pierre:",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
