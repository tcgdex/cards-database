import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-93",
	localId: 93,

	// Card informations
	name: {
		en: "Devoured Field",
		fr: "Terrain Dévoré",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques des Pokémon Darkness et des Pokémon Dragon (les vôtres et ceux de votre adversaire) infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
