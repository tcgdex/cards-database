import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-84",
	localId: 84,

	// Card informations
	name: {
		en: "Old Amber",
		fr: "Vieil Ambre",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/84/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/84/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/84/high",
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
			fr: "Jouez Vieil Ambre comme si c'était un Pokémon de base Colorless. ( Vieil Ambre compte aussi comme une carte Dresseur mais si  Vieil Ambre est mise K.O, elle compte comme un Pokémon K.O.)  Vieil Ambre ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser  Vieil Ambre. (Cela ne compte pas comme un Pokémon K.O).",
		},
	},{
		name: {
			fr: "Ambre solide:",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
