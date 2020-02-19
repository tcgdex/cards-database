import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Moonlight Stadium",
		fr: "Stade clair de lune",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/100/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/100/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/100/high.png",
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
			fr: "Le Coût de retraite de chaque Pokémon Psychic et Darkness (les vôtres et ceux de votre adversaire) est de 0.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

