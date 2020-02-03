import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-135",
	localId: 135,

	// Card informations
	name: {
		en: "Stark Mountain",
		fr: "Mont Abrupt",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/135/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/135/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/135/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois lors du tour de chaque joueur, ce joueur peut choisir une Énergie Fire ou Fighting attachée à 1 de ses Pokémon et déplacer cette Énergie sur 1 de ses Pokémon Fire ou Fighting.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

