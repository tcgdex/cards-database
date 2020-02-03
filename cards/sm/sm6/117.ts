import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-117",
	localId: 117,

	// Card informations
	name: {
		en: "Beast Energy ◇",
		fr: "Énergie Chimère ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/117/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/117/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless.\n\nLorsque cette carte est attachée à une Ultra-Chimère, elle fournit n’importe quel type d’Énergie mais ne fournit qu’une Énergie à la fois. Les attaques de l’Ultra-Chimère à laquelle cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.ENERGY,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

