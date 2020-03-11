import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-71",
	localId: 71,

	// Card informations
	name: {
		en: "Burned Tower",
		fr: "Tour Cendrée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/71/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/71/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/71/high",
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
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l'utiliser.",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut lancer une pièce. Si c'est face, il cherche une carte Énergie de base dans sa pile de défausse, la montre à son adversaire et l'ajoute à sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
