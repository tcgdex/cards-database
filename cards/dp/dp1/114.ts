import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Speed Stadium",
		fr: "Stade Rapide",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/114/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/114/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/114/high",
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
			fr: "Une seule fois lors du tour de chaque joueur, le joueur peut lancer une pièce jusqu'à ce qu'il ou elle obtienne pile. Pour chaque face, ce joueur pioche une carte.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
