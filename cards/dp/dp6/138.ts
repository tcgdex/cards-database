import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-138",
	localId: 138,

	// Card informations
	name: {
		en: "Claw Fossil",
		fr: "Fossile griffe",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/138/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/138/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/138/high",
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
			fr: "Jouez Fossile griffe comme si c'était un Pokémon de base Colorless. (Fossile griffe compte aussi comme une carte Dresseur mais si Fossile griffe est mise K.O, elle compte comme un Pokémon K.O.) Fossile griffe ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile griffe. (Cela ne compte pas comme un Pokémon K.O.)",
		},
	},{
		name: {
			fr: "Pierre tranchante:",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
