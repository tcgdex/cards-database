import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-178",
	localId: 178,

	// Card informations
	name: {
		en: "Heat Factory ◇",
		fr: "Usine Thermique ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/178/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/178/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/178/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/178/high.png",
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
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut défausser une carte Énergie Fire de sa main. Dans ce cas, il pioche 3 cartes.\n\nChaque fois qu’un joueur joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte-là sur cette carte Stade.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

