import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp4/100/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/100/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



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







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
