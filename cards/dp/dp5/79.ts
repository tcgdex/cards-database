import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-79",
	localId: 79,

	// Card informations
	name: {
		en: "Dawn Stadium",
		fr: "Stade crépuscule",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/79/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/79/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/79/high.png",
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
			fr: "Lorsqu'un joueur attache une carte Énergie de sa main à un Pokémon Grass ou Water, retirez à ce Pokémon 1 marqueur de dégât et tous ses États Spéciaux.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

