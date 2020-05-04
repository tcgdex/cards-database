import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm6/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/117/high",
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







	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
