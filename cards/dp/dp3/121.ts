import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-121",
	localId: 121,

	// Card informations
	name: {
		en: "PlusPower",
		fr: "PlusPower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/121/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/121/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/121/high",
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
			fr: "Attachez PlusPower à 1 de vos Pokémon. Défaussez cette carte à la fin de votre tour. Lorsque le Pokémon auquel PlusPower est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
