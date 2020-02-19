import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-82",
	localId: 82,

	// Card informations
	name: {
		en: "Conductive Quarry",
		fr: "Conductive Quarry [Stadium]",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/82/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/82/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/82/high.png",
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
			fr: "Une seule fois lors du tour de chaque joueur, ce joueur lance une pièce. Si c'est face, il cherche dans sa pile de défausse une carte Énergie Lightning ou Metal, la montre à son adversaire et la place dans sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

