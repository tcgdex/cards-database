import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Skull Fossil",
		fr: "Fossile crâne",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/120/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/120/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/120/high.png",
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
			fr: "Jouez Fossile crâne comme si c'était un Pokémon de base Colorless. (Fossile crâne compte aussi comme une carte Dresseur mais si Fossile crâne est mise K.O, elle compte comme un Pokémon K.O). Fossile crâne ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile crâne. (Cela ne compte pas comme un Pokémon K.O.)",
		},
	},{
		name: {
			fr: "Crâne de pierre:",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

