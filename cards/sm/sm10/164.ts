import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-164",
	localId: 164,

	// Card informations
	name: {
		en: "Beast Bringer",
		fr: "Appel aux Chimères",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/164/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/164/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/164/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "S’il vous reste exactement 6 cartes Récompense et si le Pokémon-GX ou le Pokémon-EX Actif de votre adversaire est mis K.O. par les dégâts d’une attaque de l’Ultra-Chimère à laquelle cette carte est attachée, récupérez une carte Récompense supplémentaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
