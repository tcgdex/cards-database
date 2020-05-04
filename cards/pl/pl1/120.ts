import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/120/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/120/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/120/high",
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
			fr: "Jouez Fossile crâne comme si c'était un Pokémon de base Colorless. (Fossile crâne compte aussi comme une carte Dresseur mais si Fossile crâne est mise K.O, elle compte comme un Pokémon K.O). Fossile crâne ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile crâne. (Cela ne compte pas comme un Pokémon K.O.)",
		},
	},{
		name: {
			fr: "Crâne de pierre:",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
