import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-140",
	localId: 140,

	// Card informations
	name: {
		en: "Erika's Hospitality",
		fr: "Hospitalité d’Erika",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/140/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/140/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/140/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/140/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous avez 4 autres cartes ou moins dans votre main.\n\nPiochez une carte pour chacun des Pokémon en jeu de votre adversaire.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

