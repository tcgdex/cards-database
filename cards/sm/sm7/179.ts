import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-179",
	localId: 179,

	// Card informations
	name: {
		en: "Hustle Belt",
		fr: "Ceinture Agitée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/179/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/179/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/179/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/179/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée a 30 PV ou moins et a déjà des marqueurs de dégâts, ses attaques infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

