import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-139",
	localId: 139,

	// Card informations
	name: {
		en: "Root Fossil",
		fr: "Fossile racine",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/139/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/139/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/139/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/139/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jouez Fossile racine comme si c'était un Pokémon de base Colorless. (Fossile racine compte aussi comme une carte Dresseur mais si Fossile racine est mise K.O, elle compte comme un Pokémon K.O.) Fossile racine ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile racine. (Cela ne compte pas comme un Pokémon K.O.)",
		},
	},{
		name: {
			fr: "Pierre spongieuse:",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

