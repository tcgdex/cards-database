import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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
